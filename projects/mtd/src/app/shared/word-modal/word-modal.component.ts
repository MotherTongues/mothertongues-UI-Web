import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { DictionaryData } from '../../core/models';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { BookmarksService, MtdService } from '../../core/core.module';
import { FileNotFoundDialogComponent } from '../file-not-found/file-not-found.component';
@Component({
  selector: 'mtd-word-modal',
  templateUrl: './word-modal.component.html',
  styleUrls: [
    './word-modal.component.scss',
    '../../app/app.component.scss'
    //   '../../pages/about/about/about.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordModalComponent implements OnInit {
  checkedOptions: string[];
  displayImages = true; // default show images, turns to false on 404
  entry: DictionaryData;
  optional = false;
  optionalSelection: string[];
  objectKeys = Object.keys;
  image: string;

  constructor(
    public bookmarkService: BookmarksService,
    private mtdService: MtdService,
    public dialogRef: MatDialogRef<WordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog
  ) {
    console.log(this.optionalSelection);
    this.checkedOptions = this.optionalSelection;

    try {
      this.image = 'assets/img/' + this.entry.img;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  getKey(obj) {
    return Object.keys(obj);
  }

  getVal(obj) {
    return Object.values(obj);
  }

  checkChecked(option) {
    console.log(option);
    if (this.checkedOptions.indexOf(option) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  hasAudio() {
    if ('audio' in this.data.entry) {
      const audio = this.data.entry.audio.filter(x => {
        let notEmpty = true;
        Object.keys(x).forEach(k => {
          if (!x[k]) {
            notEmpty = false;
            return notEmpty;
          }
        });
        return notEmpty;
      });
      return audio.length > 0;
    } else {
      return false;
    }
  }

  fileNotFound(path) {
    const dialogRef = this.dialog.open(FileNotFoundDialogComponent, {
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
    this.bookmarkService.toggleBookmark(entry);
  }

  favourited(entry) {
    return this.bookmarkService.bookmarks.value.indexOf(entry) > -1;
  }
}
