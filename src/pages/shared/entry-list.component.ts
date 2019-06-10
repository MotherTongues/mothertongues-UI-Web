import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { WordModal } from './word-modal.component'
import { DictionaryData } from '../../app/models'

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

  constructor() {
    // this.pageName = modalCtrl.name
  }

  async showModal(clicked_entry) {
    console.log('show modal')
    // let wordModal = await this.modalCtrl.create({
    //   component: WordModal,
    //   componentProps: { entry: clicked_entry }
    // });
    // await wordModal.present();
  }

  highlight(text) {
    if (!this.searchTerm) {
      return text;
    }
    return text.replace(new RegExp(this.searchTerm, 'gi'), '<span class="langMatched">$&</span>');
  }

  ngOnChanges() {
    this.edit = this.parentEdit;
  }

}
