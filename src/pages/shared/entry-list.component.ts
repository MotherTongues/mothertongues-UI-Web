import { Component, Input, Inject, OnChanges, SimpleChange } from '@angular/core';
import { WordModal } from './word-modal.component';
import { DictionaryData } from '../../app/models';
import { BookmarkService } from '../../services/bookmark.service';
import { MTDService } from '../../services';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FileNotFoundDialog } from './file-not-found.component'

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
  constructor(private bookmarkService: BookmarkService, public dialog: MatDialog, private mtdService: MTDService) {
    // this.pageName = modalCtrl.name
  }
  ngOnInit() {

    console.log(this.entries)
  }

  async showModal(entry) {
    this.dialog.open(WordModal, {
      width: '40%',
      data: { entry }
    })
  }

  playDefaultAudio(entry) {
    const defaultAudio = this.mtdService.config_value.audio_path + entry.audio.filter(audioFile => audioFile.filename)[0].filename;
    console.log(defaultAudio);
    const audio = new Audio(defaultAudio);
    audio.onerror = () => this.fileNotFound(defaultAudio);
    audio.play();
  }

  fileNotFound(path) {
    const dialogRef = this.dialog.open(FileNotFoundDialog, {
      width: '250px',
      data: { path }
    });
  }

  highlight(text) {
    if (!this.searchTerm) {
      return text;
    }
    return text.replace(new RegExp(this.searchTerm, 'gi'), '<span class="langMatched">$&</span>');
  }

  toggleBookmark(entry) {
    this.bookmarkService.toggleBookmark(entry)
  }

  ngOnChanges() {
    this.edit = this.parentEdit;
  }

}
