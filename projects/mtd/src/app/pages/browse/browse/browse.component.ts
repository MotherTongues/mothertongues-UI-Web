import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DictionaryData } from '../../../core/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  BookmarksService,
  MtdService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../core/core.module';
@Component({
  selector: 'mtd-browse',
  templateUrl: './browse.component.html',
  styleUrls: [
    './browse.component.scss',
    '../../../app/app.component.scss',
    '../../about/about/about.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseComponent implements OnInit {
  currentEntries$: BehaviorSubject<DictionaryData[]>;
  currentX: DictionaryData[];
  displayCategories$: Observable<any>;
  displayLetters$: Observable<any>;
  letters: string[];
  initialLetters: string[];
  selectedCategory = 'words';
  selectedLetter: number;
  startIndex$: BehaviorSubject<number> = new BehaviorSubject(0);
  default_shown = 8;
  // currentBrowsingLetter: String = this.letters[this.currentBrowsingEntries[0].sorting_form[0]];
  letterSelectOptions: Object = { header: 'Select a Letter' };
  categorySelectOptions: Object = { header: 'Select a Category' };
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(
    public bookmarkService: BookmarksService,
    private mtdService: MtdService
  ) {
    this.displayCategories$ = this.mtdService.category_keys$;
    this.currentEntries$ = new BehaviorSubject<DictionaryData[]>(
      this.mtdService.dataDict_value
    );
    // this.letters = this.mtdService.config_value.L1.lettersInLanguage;
    this.mtdService.dataDict$.subscribe(x => {
      this.currentEntries$.next(x);
      this.initializeEntries();
    });
    this.currentEntries$
      .pipe(map(entries => this.getXFrom(this.startIndex$.value, entries)))
      .subscribe(entries => (this.currentX = entries));

    this.startIndex$
      .pipe(map(i => this.getXFrom(i, this.currentEntries$.getValue())))
      .subscribe(entries => (this.currentX = entries));
    this.initializeEntries();
  }

  ngOnInit(): void {}

  getXFrom(
    i: number,
    entries: DictionaryData[],
    x: number = this.default_shown
  ): DictionaryData[] {
    return entries.slice(i, i + x);
  }

  initializeEntries() {
    // Add letter index to first words of that letter in entries
    this.letterInit();
  }

  letterNeverStarts(letter) {
    return this.displayLetters$.pipe(
      map(letters => letters.indexOf(letter) === -1)
    );
  }

  highlightLetter(letter) {
    return this.letters.indexOf(letter) === this.currentX[0].sorting_form[0];
  }

  // Determine whether letter occurs word-initially
  letterInit() {
    this.letters = this.mtdService.config_value.L1.lettersInLanguage;
    this.displayLetters$ = this.currentEntries$.pipe(
      map(entries => {
        const newLetters = [];
        for (const letter of this.letters) {
          const ind = this.letters.indexOf(letter);
          for (const entry of entries) {
            if (entry.sorting_form[0] === ind) {
              entry.firstWordIndex = ind;
              newLetters.push(letter);
              break;
            }
          }
        }
        return newLetters;
      })
    );
  }
  // Scroll to previous X entries
  prevX() {
    let current_val = this.startIndex$.value;
    if (current_val - this.default_shown > 0) {
      this.startIndex$.next((current_val -= this.default_shown));
    } else {
      this.startIndex$.next(0);
    }
  }

  // Scroll to next X entries
  nextX() {
    let current_val = this.startIndex$.value;
    if (
      current_val + this.default_shown <
      this.currentEntries$.getValue().length
    ) {
      this.startIndex$.next((current_val += this.default_shown));
    } else {
      this.startIndex$.next(
        Math.max(this.currentEntries$.getValue().length - this.default_shown, 0)
      );
    }
  }

  // Scroll to letter
  scrollTo(letter: string) {
    const letterIndex = this.letters.indexOf(letter);
    for (const entry of this.currentEntries$.getValue()) {
      if (entry.sorting_form[0] === letterIndex) {
        this.startIndex$.next(this.currentEntries$.getValue().indexOf(entry));
        break;
      }
    }
  }

  selectCategory(category: string) {
    if (category === 'words') {
      this.mtdService.dataDict$
        .pipe(map(x => this.currentEntries$.next(x)))
        .subscribe()
        .unsubscribe();
    } else {
      this.mtdService.categories$
        .pipe(map(x => this.currentEntries$.next(x[category])))
        .subscribe()
        .unsubscribe();
    }
    this.selectedCategory = category;
    this.startIndex$.next(0);
    this.letterInit();
  }
}
