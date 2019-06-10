import { Component } from '@angular/core';
import { DictionaryData } from '../../app/models'
import { BookmarkService, MTDService } from '../../services';

@Component({
  selector: 'word-modal',
  templateUrl: 'word-modal.component.html'
})


export class WordModal {
  checkedOptions: string[];
  displayImages: boolean = true; //default show images, turns to false on 404
  entry: DictionaryData
  optional: boolean = false;
  optionalSelection: string[];
  objectKeys = Object.keys;
  image: string;
  default_sentence_i: number = 0;
  audio_playing = [];
  audio_path: string;
  constructor(public bookmarkService: BookmarkService,
    private mtdService: MTDService) {
    // this.audio_path = this.mtdService.config_value.audio_path
    // this.entry = navParams.get('entry');
    // if (this.entry.optional) {
    //   this.optionalSelection = this.entry.optional.map(x => Object.keys(x))[0]
    // }
    console.log(this.optionalSelection)
    this.checkedOptions = this.optionalSelection
    console.log(this.checkedOptions)
    try {
      this.image = 'assets/img/' + this.entry.img;
    } catch (error) {
      console.log(error)
    }
  }

  dismiss() {
    // this.modalCtrl.dismiss()
  }

  async showAlert() {
    console.log('show alert')
    // let alert = await this.alertCtrl.create({
    //   header: 'Sorry',
    //   subHeader: 'There is no audio for this yet.',
    //   buttons: ['Dismiss']
    // });
    // await alert.present();
  };

  async showExpAlert() {

    console.log('show alert')
    // let alert = await this.alertCtrl.create({
    //   header: 'Sorry',
    //   subHeader: 'There is no audio for this yet. Are you sure you are connected to the internet?',
    //   buttons: ['Dismiss']
    // });
    // await alert.present();
  };

  async showOptions() {

    // Object with options used to create the alert
    let options = {
      title: 'Optional fields',
      message: 'Choose which optional fields to display',
      inputs: [],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            let checkedOptions = []
            for (let item of data) {
              for (let key of this.optionalSelection) {
                if (key === item) {
                  checkedOptions.push(key)
                }
              }
            }
            this.checkedOptions = checkedOptions
          }
        }
      ]
    };


    // Now we add the radio buttons
    for (let option of this.optionalSelection) {
      options.inputs.push({ name: 'options', value: option, label: option, type: 'checkbox', checked: this.checkChecked(option) });
    }

    console.log('show alert')
    // let alert = await this.alertCtrl.create(options);
    // await alert.present();

  }

  checkChecked(option) {
    console.log(option)
    if (this.checkedOptions.indexOf(option) >= 0) {
      return true;
    } else {
      return false;
    }
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
