import { Component } from '@angular/core';
import { DictionaryData } from '../../app/models';
import { MTDService } from '../../services';
import { concat, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap, every } from 'rxjs/operators';
import { FormControl } from "@angular/forms"

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  styleUrls: ['search.scss']
})
export class Search {
  entries$: Observable<DictionaryData[]>;
  results$: Observable<DictionaryData[]>;
  matchThreshold: number = 0;
  partMatchThreshold: number = 1;
  maybeMatchThreshold: number = 2;
  matches$: Observable<DictionaryData[]>;
  matches: DictionaryData[];
  partMatches$: Observable<DictionaryData[]>;
  maybeMatches$: Observable<DictionaryData[]>;
  searchControl: FormControl;
  searchQuery$: Observable<string>;
  placeholder: string = 'Type a word here';
  language$: Observable<string>;
  constructor(private mtdService: MTDService) {
    this.entries$ = this.mtdService.dataDict$;
    this.searchControl = new FormControl();
    this.language$ = this.mtdService.name$
    // this.entries$.subscribe(x => this.placeholder = 'Type a word here to search ' + x.length.toString() + ' words')
  }

  ngOnInit() {
    this.searchQuery$ = this.searchControl.valueChanges
    this.results$ = this.searchQuery$.pipe(
      debounceTime(100),
      switchMap((term) => this.entries$.pipe(
        map((entries) => this.getResults(term, entries)))),
    )
    // this.results$.subscribe(x => console.log(x))
    this.matches$ = this.results$.pipe(
      map(results => results.filter(r => r['distance'] <= this.matchThreshold)),
      catchError(error => of([]))
    )
    this.matches$.subscribe(x => console.log(x.length === 0))
    this.partMatches$ = this.results$.pipe(
      map(results => results.filter(r => (r['distance'] <= this.partMatchThreshold && r['distance'] > this.matchThreshold))),
      catchError(error => of([]))
    )
    this.partMatches$.subscribe(x => console.log(x.length === 0))
    this.maybeMatches$ = this.results$.pipe(
      map(results => results.filter(r => (this.maybeMatchThreshold && r['distance'] > this.partMatchThreshold))),
      catchError(error => of([]))
    )
    this.maybeMatches$.subscribe(x => console.log(x.length === 0))
  }

  anyMatches() {
    let all_matches$ = concat(
      this.matches$,
      this.partMatches$,
      this.maybeMatches$
    )
    return all_matches$.pipe(
      every(x => x.length === 0)
    )
  }

  getL2(searchQuery, entries): DictionaryData[] {
    var results = []
    var re = new RegExp(searchQuery, 'i')
    for (let entry of entries) {
      if (re.test(entry.definition)) {
        results.push(entry)
      }
    }
    let sorted_answers = results.sort(function (a, b) {
      return a["definition"].length - b["definition"].length;
    });
    return (sorted_answers.slice(0, 9))
  };

  // Get l2_results (eng) and target (l1) results
  getResults(searchQuery, entries): DictionaryData[] {
    if (searchQuery.length > 1) {
      let l2_results = this.getL2(searchQuery, entries).map(x => {
        x['distance'] = 0;
        x['type'] = 'L2';
        return x
      })
      let l1_results = window["searchL1"](searchQuery, entries).map(x => {
        // levlib returns an array with the weight and entry
        x[1]['type'] = 'L1';
        return x[1]
      })
      let results = l2_results.concat(l1_results);
      this.matches = results
      return results
    }
  };

}
