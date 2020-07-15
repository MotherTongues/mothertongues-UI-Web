import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { concat, Observable, BehaviorSubject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
  every
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { DictionaryData } from '../../../core/models';
import {
  MtdService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../core/core.module';

import { slugify } from 'transliteration';

@Component({
  selector: 'mtd-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss',
    '../../../app/app.component.scss',
    '../../about/about/about.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  entries: DictionaryData[];
  entries$: Observable<DictionaryData[]>;
  matches: DictionaryData[] = [];
  partMatches: DictionaryData[] = [];
  maybeMatches: DictionaryData[] = [];
  matchThreshold = 0;
  partialThreshold = 1;
  maybeThreshold = 2;
  approxWeight = 1;
  searchControl: FormControl;
  searchQuery = '';
  placeholder = 'Type a word here';
  language$: Observable<string>;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(private mtdService: MtdService) {
    this.entries$ = this.mtdService.dataDict$;
    this.searchControl = new FormControl();
    this.language$ = this.mtdService.name$;
  }

  ngOnInit(): void {
    this.entries$.subscribe(entries => (this.entries = entries));
    // this.results$ = this.searchQuery$.pipe(
    //   distinctUntilChanged(),
    //   debounceTime(100),
    //   switchMap(term =>
    //     this.entries$.pipe(map(entries => this.getResults(term, entries)))
    //   )
    // );
    // this.results$.subscribe(x => console.log(x));
  }

  getRegex(re, key = 'definition') {
    const results = [];
    for (const entry of this.entries) {
      if (re.test(entry[key])) {
        results.push(entry);
      }
    }
    const sorted_answers = results.sort(function(a, b) {
      return a[key].length - b[key].length;
    });
    return sorted_answers.slice(0, 9);
  }

  getRegexFromSlug(re, key = 'word') {
    const results = [];
    for (const entry of this.entries) {
      if (re.test(slugify(entry[key]))) {
        results.push(entry);
      }
    }
    const sorted_answers = results.sort(function(a, b) {
      return a[key].length - b[key].length;
    });
    return sorted_answers.slice(0, 9);
  }

  onSearchKeyUp(e: KeyboardEvent) {
    this.getResults((e.target as HTMLInputElement).value);
    // this.searchQuery$.next((e.target as HTMLInputElement).value);
  }

  filterMatches(results) {
    return results.filter(r => r.distance <= this.matchThreshold);
  }
  filterPartMatches(results) {
    return results.filter(
      r =>
        r.distance <= this.partialThreshold && r.distance > this.matchThreshold
    );
  }
  filterMaybeMatches(results) {
    return results.filter(
      r => this.maybeThreshold && r.distance > this.partialThreshold
    );
  }

  getL2(searchQuery, entries): DictionaryData[] {
    const results = [];
    const re = new RegExp(searchQuery, 'i');
    for (const entry of entries) {
      if (re.test(entry.definition)) {
        results.push(entry);
      }
    }
    const sortedAnswers = results.sort((a, b) => {
      return a.definition.length - b.definition.length;
    });
    return sortedAnswers.slice(0, 9);
  }

  // Get l2_results (eng) and target (l1) results
  getResults(searchQuery) {
    if (searchQuery.length > 1) {
      // Normalize
      const mtd = window['mtd'];
      const originalSearchTerm = mtd.convertQuery(searchQuery);
      // 1. Exact match
      const searchQueryRegex = new RegExp(
        `(\\s|^){1}${searchQuery}(?=([;.?!\\s]|$))`,
        'i'
      );
      const l1Exact = this.getRegex(searchQueryRegex, 'word');
      const l2Exact = this.getRegex(searchQueryRegex);
      // 2. Partial match
      const searchQueryPartialRegex = new RegExp(
        `(\\s|^){1}(${searchQuery})\\S|\\S(${searchQuery})(\\s|^){1}|\\S(${searchQuery})\\S`,
        'i'
      );
      const l1Partial = this.getRegex(searchQueryPartialRegex, 'word');
      const l2Partial = this.getRegex(searchQueryPartialRegex);
      // 3. Partial match on slugified form
      const l1PartialSlug = this.getRegexFromSlug(
        new RegExp(
          searchQueryPartialRegex.source + '|' + searchQueryRegex.source,
          'i'
        )
      );
      // 4. levenstein (includes compare form and display)
      const target = window['searchL1'](originalSearchTerm);
      // Match containers
      let allMatches = [];
      const matches = [];
      const partMatches = [];
      const maybeMatches = [];

      // Collect l1Exact matches and add to allMatches
      const populateL1Exact = () => {
        for (const result of l1Exact) {
          const entry = result;
          entry.type = 'L1';
          entry.distance = this.matchThreshold;
          allMatches.push(entry);
        }
      };

      // Collect l2Exact matches and add to allMatches
      const populateL2Exact = () => {
        for (const result of l2Exact) {
          const entry = result;
          entry.type = 'L2';
          entry.distance = this.matchThreshold;
          allMatches.push(entry);
        }
      };

      // Collect l1Partial matches and add to allMatches
      const populateL1Partial = () => {
        for (const result of l1Partial.concat(l1PartialSlug)) {
          const entry = result;
          entry.type = 'L1';
          entry.distance = this.partialThreshold;
          allMatches.push(entry);
        }
      };

      // Collect l2Partial matches and add to allMatches
      const populateL2Partial = () => {
        for (const result of l2Partial) {
          const entry = result;
          entry.type = 'L2';
          entry.distance = this.partialThreshold;
          allMatches.push(entry);
        }
      };

      const populateTarget = () => {
        for (const result of target) {
          const entry = result[1];
          entry.type = 'L1';
          const resultIndex = allMatches.findIndex(
            match =>
              match.word === entry.word && match.definition === match.definition
          );
          if (resultIndex === -1) {
            allMatches.push(entry);
          } else {
            if (
              'distance' in allMatches[resultIndex] &&
              allMatches[resultIndex].distance > result[0]
            ) {
              allMatches[resultIndex].distance = result[0] + this.approxWeight;
            }
          }
        }
      };

      const mergeMatches = () => {
        for (const entry of allMatches) {
          if ('distance' in entry) {
            if (entry.distance === this.matchThreshold) {
              matches.push(entry);
            } else if (
              'distance' in entry &&
              entry.distance <= this.partialThreshold &&
              entry.distance > this.matchThreshold
            ) {
              partMatches.push(entry);
            } else if (
              entry.distance <= this.maybeThreshold &&
              entry.distance > this.partialThreshold
            ) {
              maybeMatches.push(entry);
            }
          } else {
            matches.push(entry);
          }
        }
      };
      populateL1Exact();
      populateL2Exact();
      populateL1Partial();
      populateL2Partial();
      populateTarget();
      allMatches = allMatches.filter(
        (match, index, self) =>
          self.findIndex(
            t => t.word === match.word && t.definition === match.definition
          ) === index
      );
      mergeMatches();
      this.matches = matches;
      this.partMatches = partMatches;
      this.maybeMatches = maybeMatches;
    }
    // console.log('get results');
    // if (searchQuery && searchQuery.length > 1) {
    //   console.log(searchQuery);
    //   const l2_results = this.getL2(searchQuery, entries).map(x => {
    //     x.distance = 0;
    //     x['type'] = 'L2';
    //     return x;
    //   });
    //   let l1_results = window['searchL1'](searchQuery, entries).map(x => {
    //     // levlib returns an array with the weight and entry
    //     x[1]['type'] = 'L1';
    //     return x[1];
    //   });
    //   const results = l2_results.concat(l1_results);
    //   return results;
    // } else {
    //   return [];
    // }
  }
}
