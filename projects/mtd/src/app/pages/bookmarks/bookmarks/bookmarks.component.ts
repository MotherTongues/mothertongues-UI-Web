import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { DictionaryData } from '../../../core/models';
import {
  BookmarksService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../core/core.module';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'mtd-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: [
    './bookmarks.component.scss',
    '../../../app/app.component.scss',
    '../../about/about/about.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksComponent implements OnDestroy, OnInit {
  bookmarks: DictionaryData[];
  edit = false;
  unsubscribe$ = new Subject<void>();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(public bookmarkService: BookmarksService) {
    this.bookmarkService.bookmarks
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(bookmarks => {
        this.bookmarks = bookmarks;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  removeEntries(bookmarks) {
    this.bookmarkService.setBookmarks(
      bookmarks.filter(bookmark => !bookmark.checked)
    );
    this.toggleEdit();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }
  ngOnInit() {}
}
