import {
  Component,
  Input,
  Inject,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { WordModalComponent } from '../word-modal/word-modal.component';
import { DictionaryData } from '../../core/models';
import { BookmarksService, MtdService } from '../../core/core.module';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { FileNotFoundDialogComponent } from '../file-not-found/file-not-found.component';
import { slugify } from 'transliteration';

const levenstein = function(string1, string2) {
  const a = string1,
    b = string2 + '',
    m = [],
    min = Math.min;
  let i, j;

  if (!(a && b)) return (b || a).length;

  for (i = 0; i <= b.length; m[i] = [i++]);
  for (j = 0; j <= a.length; m[0][j] = j++);

  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      m[i][j] =
        b.charAt(i - 1) === a.charAt(j - 1)
          ? m[i - 1][j - 1]
          : (m[i][j] = min(
              m[i - 1][j - 1] + 1,
              min(m[i][j - 1] + 1, m[i - 1][j] + 1)
            ));
    }
  }

  return m[b.length][a.length];
};

@Component({
  selector: 'mtd-entry-list',
  templateUrl: 'entry-list.component.html',
  styleUrls: ['entry-list.component.scss']
})
export class EntryListComponent implements OnChanges {
  pageName: string;
  edit = false;

  @Input() parentEdit: boolean;
  @Input() entries: DictionaryData[];
  @Input() searchTerm: string;
  @Input() threshold: number;
  @Input() shouldHighlight = false;
  constructor(
    private bookmarkService: BookmarksService,
    public dialog: MatDialog,
    private mtdService: MtdService
  ) {
    // this.pageName = modalCtrl.name
  }

  async showModal(entry) {
    this.dialog.open(WordModalComponent, {
      width: '40%',
      data: { entry }
    });
  }

  playDefaultAudio(entry) {
    let audioPrefix = '';
    if ('audio_path' in this.mtdService.config_value) {
      audioPrefix = this.mtdService.config_value.audio_path;
    }
    const defaultAudio =
      audioPrefix +
      entry.audio.filter(audioFile => audioFile.filename)[0].filename;
    const audio = new Audio(defaultAudio);
    audio.onerror = () => this.fileNotFound(defaultAudio);
    audio.play();
  }

  fileNotFound(path) {
    const dialogRef = this.dialog.open(FileNotFoundDialogComponent, {
      width: '250px',
      data: { path }
    });
  }

  hasAudio(entry) {
    return 'audio' in entry && entry.audio.length > 0;
  }

  // highlight(text) {
  //   if (!this.searchTerm) {
  //     return text;
  //   }
  //   return text.replace(
  //     new RegExp(this.searchTerm, 'gi'),
  //     '<span class="langMatched">$&</span>'
  //   );
  // }

  highlight(entry, langType) {
    // TODO: this cannot properly deal with multi-word inputs.
    let text;
    if (langType === 'L1') {
      text = entry.word;
    } else if (langType === 'L2') {
      text = entry.definition;
    }
    if (!this.searchTerm) {
      return text;
    }
    if (langType === 'L1') {
      // if normalized, lower case search term matches word, return that, wrapped in <span>
      // else if compare form is < 2 distance, wrap that in <span>
      const mtd = window['mtd'];
      let normTransducerName = 'norm';
      if ('norm_composite' in mtd.transducers) {
        normTransducerName = 'norm_composite';
      }
      let compareTransducerName = 'compare';
      if ('compare_composite' in mtd.transducers) {
        compareTransducerName = 'compare_composite';
      }
      // initial terms
      const searchTerm = mtd
        .transduce(this.searchTerm, normTransducerName)
        .toLowerCase();
      const normText = mtd.transduce(text, normTransducerName).toLowerCase();
      const normSearchTermPattern = new RegExp(searchTerm, 'gi');

      // Match norm against text
      let firstMatch;
      if (text.match(normSearchTermPattern)) {
        const highlightIndices = [];
        while ((firstMatch = normSearchTermPattern.exec(text))) {
          highlightIndices.push([
            firstMatch.index,
            normSearchTermPattern.lastIndex
          ]);
        }
        highlightIndices.reverse();
        let newText = text;
        for (let i = 0; i < highlightIndices.length; i++) {
          const beforeMatch = newText.substring(0, highlightIndices[i][0]);
          const startMatchWrapper = '<span class="langMatched">';
          const match = newText.substring(
            highlightIndices[i][0],
            highlightIndices[i][1]
          );
          const endMatchWrapper = '</span>';
          const afterMatch = newText.substring(
            highlightIndices[i][1],
            newText.length
          );
          newText =
            beforeMatch +
            startMatchWrapper +
            match +
            endMatchWrapper +
            afterMatch;
        }
        return newText;
      }
      // Match norm against slugified text
      const slugText = slugify(entry.word);
      // Match norm against slug. Lengths of text and slugText must be the same to work properly
      let firstSlugMatch;
      if (
        slugText.match(normSearchTermPattern) &&
        slugText.length === text.length
      ) {
        const highlightIndices = [];
        while ((firstSlugMatch = normSearchTermPattern.exec(slugText))) {
          highlightIndices.push([
            firstSlugMatch.index,
            normSearchTermPattern.lastIndex
          ]);
        }
        highlightIndices.reverse();
        let newText = text;
        for (let i = 0; i < highlightIndices.length; i++) {
          const beforeMatch = newText.substring(0, highlightIndices[i][0]);
          const startMatchWrapper = '<span class="langMatched">';
          const slugMatch = newText.substring(
            highlightIndices[i][0],
            highlightIndices[i][1]
          );
          const endMatchWrapper = '</span>';
          const afterMatch = newText.substring(
            highlightIndices[i][1],
            newText.length
          );
          newText =
            beforeMatch +
            startMatchWrapper +
            slugMatch +
            endMatchWrapper +
            afterMatch;
        }
        return newText;
      }
      // Match norm against compare text
      let compareText = entry.word;
      if ('compare_form' in entry) {
        compareText = entry.compare_form;
      }
      compareText = compareText.toLowerCase();
      // Match lev distance between norm or compare on single word
      if (
        levenstein(normText, searchTerm) <= this.threshold ||
        levenstein(compareText, searchTerm) <= this.threshold ||
        levenstein(slugText, searchTerm) <= this.threshold
      ) {
        return `<span class="langMatched">${text}</span>`;
      }

      // match lev distance between word and sentence matches
      if (text.indexOf(' ') !== -1 && searchTerm.indexOf(' ') < 0) {
        // highlight lowest distance word if search is single word and text is sentence
        const words = text.split(' ');
        const normWords = words.map(x =>
          mtd.transduce(x, normTransducerName).toLowerCase()
        );
        const normWordsDistances = normWords.map(x =>
          levenstein(x, searchTerm)
        );
        const normMinIndex = normWordsDistances.indexOf(
          Math.min(...normWordsDistances)
        );
        if (normWordsDistances[normMinIndex] <= this.threshold) {
          words[
            normMinIndex
          ] = `<span class="langMatched">${words[normMinIndex]}</span>`;
          return words.join(' ');
        }
        // else look at compare
        const compareWords = words.map(x =>
          mtd.transduce(x, compareTransducerName).toLowerCase()
        );
        const compareWordsDistances = compareWords.map(x =>
          levenstein(x, searchTerm)
        );
        const compareMinIndex = compareWordsDistances.indexOf(
          Math.min(...compareWordsDistances)
        );
        if (compareWordsDistances[compareMinIndex] <= this.threshold) {
          words[
            compareMinIndex
          ] = `<span class="langMatched">${words[compareMinIndex]}</span>`;
          return words.join(' ');
        }
        // else look at slugified
        const slugWords = words.map(x => slugify(x));
        const slugWordsDistances = slugWords.map(x =>
          levenstein(x, searchTerm)
        );
        const slugMinIndex = slugWordsDistances.indexOf(
          Math.min(...slugWordsDistances)
        );
        if (slugWordsDistances[slugMinIndex] <= this.threshold) {
          words[
            slugMinIndex
          ] = `<span class="langMatched">${words[slugMinIndex]}</span>`;
          return words.join(' ');
        }
      }
      // Last resort, just highlight the whole thing if it doesn't already match L2
      const l2Pattern = new RegExp(this.searchTerm, 'gi');
      if (!l2Pattern.test(entry.definition)) {
        return `<span class="langMatched">${text}</span>`;
      } else {
        return `<span>${text}</span>`;
      }
    } else if (langType === 'L2') {
      return text.replace(
        new RegExp(this.searchTerm, 'gi'),
        '<span class="langMatched">$&</span>'
      );
    } else {
      return text;
    }
  }

  toggleBookmark(entry) {
    this.bookmarkService.toggleBookmark(entry);
  }

  ngOnChanges() {
    this.edit = this.parentEdit;
  }
}
