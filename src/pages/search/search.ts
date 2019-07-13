import { Component, OnInit } from '@angular/core';
import { DictionaryData } from '../../app/models';
import { MTDService } from '../../services';
import { concat, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap, every } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  styleUrls: ['search.scss']
})
export class SearchComponent implements OnInit {
  entries$: Observable<DictionaryData[]>;
  results$: Observable<DictionaryData[]>;
  matchThreshold = 0;
  partMatchThreshold = 1;
  maybeMatchThreshold = 2;
  searchControl: FormControl;
  searchQuery$: BehaviorSubject<string> = new BehaviorSubject('');
  placeholder = 'Type a word here';
  language$: Observable<string>;
  constructor(private mtdService: MTDService) {
    this.entries$ = this.mtdService.dataDict$;
    this.searchControl = new FormControl();
    this.language$ = this.mtdService.name$;
  }

  ngOnInit() {
    this.results$ = this.searchQuery$.pipe(
      distinctUntilChanged(),
      debounceTime(100),
      switchMap((term) => this.entries$.pipe(
        map((entries) => this.getResults(term, entries)))),
    );
    this.results$.subscribe(x => console.log(x));
  }

  onSearchKeyUp(e: KeyboardEvent) {
    this.searchQuery$.next((e.target as HTMLInputElement).value);
  }

  filterMatches(results) {
    return results.filter(r => r.distance <= this.matchThreshold);
  }
  filterPartMatches(results) {
    return results.filter(r => (r.distance <= this.partMatchThreshold && r.distance > this.matchThreshold));
  }
  filterMaybeMatches(results) {
    return results.filter(r => (this.maybeMatchThreshold && r.distance > this.partMatchThreshold));
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
    return (sortedAnswers.slice(0, 9));
  }

  // Get l2_results (eng) and target (l1) results
  getResults(searchQuery, entries): DictionaryData[] {
    console.log('get results')
    if (searchQuery && searchQuery.length > 1) {
      console.log(searchQuery)
      const l2_results = this.getL2(searchQuery, entries).map(x => {
        x.distance = 0;
        x['type'] = 'L2';
        return x;
      });
      let l1_results = window['searchL1'](searchQuery, entries).map(x => {
        // levlib returns an array with the weight and entry
        x[1]['type'] = 'L1';
        return x[1];
      });
      const results = l2_results.concat(l1_results);
      return results;
    } else {
      return [];
    }
  }

}
