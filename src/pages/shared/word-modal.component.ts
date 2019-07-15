import { Component, Inject } from '@angular/core';
import { DictionaryData } from '../../app/models'
import { BookmarkService, MTDService } from '../../services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileNotFoundDialog } from './file-not-found.component';

@Component({
  selector: 'word-modal-component',
  templateUrl: 'word-modal.component.html',
})
export class WordModal {
  checkedOptions: string[];
  displayImages = true; //default show images, turns to false on 404
  entry: DictionaryData;
  optional = false;
  optionalSelection: string[];
  objectKeys = Object.keys;
  image: string;

  constructor(public bookmarkService: BookmarkService, private mtdService: MTDService, public dialogRef: MatDialogRef<WordModal>,
    @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, ) {

    console.log(this.optionalSelection)
    this.checkedOptions = this.optionalSelection;

    try {
      this.image = 'assets/img/' + this.entry.img;
    } catch (error) {
      console.log(error)
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  checkChecked(option) {
    console.log(option)
    if (this.checkedOptions.indexOf(option) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  fileNotFound(path) {
    const dialogRef = this.dialog.open(FileNotFoundDialog, {
      width: '250px',
      data: { path }
    });
  }

  playAudio(fn) {
    const path = this.mtdService.config_value.audio_path + fn;
    const audio = new Audio(path);
    audio.onerror = () => this.fileNotFound(path);
    audio.play();
  }

  imageError() {
    this.displayImages = false;
  }

  toggleFav(entry) {
    this.bookmarkService.toggleBookmark(entry)
  }

  favourited(entry) {
    return this.bookmarkService.bookmarks.value.indexOf(entry) > -1
  }
}
