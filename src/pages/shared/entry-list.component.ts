import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { WordModal } from './word-modal.component'
import { DictionaryData } from '../../app/models'
import { BookmarkService } from '../../services/bookmark.service'

@Component({
  selector: 'entry-list',
  templateUrl: 'entry-list.component.html',
  styleUrls: ['entry-list.component.scss']
})


export class EntryList implements OnChanges {
  pageName: string;
  edit: boolean = false;

  @Input() parentEdit: boolean;
  @Input() entries: DictionaryData[];
  @Input() searchTerm: string;
  @Input() shouldHighlight: boolean = false;
  constructor(private bookmarkService: BookmarkService) {
    // this.pageName = modalCtrl.name
  }
  ngOnInit() {

    console.log(this.entries)
  }

  async showModal(clicked_entry) {
    console.log('show modal')
  }

  highlight(text) {
    if (!this.searchTerm) {
      return text;
    }
    return text.replace(new RegExp(this.searchTerm, 'gi'), '<span class="langMatched">$&</span>');
  }

  toggleBookmark(entry){
    this.bookmarkService.toggleBookmark(entry)
  }

  ngOnChanges() {
    this.edit = this.parentEdit;
  }

}
