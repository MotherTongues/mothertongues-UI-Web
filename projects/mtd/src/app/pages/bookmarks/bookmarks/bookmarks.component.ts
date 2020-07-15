import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DictionaryData } from '../../../core/models';
import {
  BookmarksService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../core/core.module';
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
export class BookmarksComponent implements OnInit {
  bookmarks: DictionaryData[];
  edit = false;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(public bookmarkService: BookmarksService) {
    this.bookmarkService.bookmarks.subscribe(bookmarks => {
      this.bookmarks = bookmarks;
    });
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
