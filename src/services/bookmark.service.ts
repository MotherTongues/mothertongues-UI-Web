import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { MTDService } from './mtd.service'
import { Config, DictionaryData } from '../app/models'

@Injectable({ providedIn: 'root' })
export class BookmarkService {
    public bookmarks = new BehaviorSubject<DictionaryData[]>([]);
    config: Config;
    constructor(private mtdService: MTDService) {
        this.config = this.mtdService.config_value
    }

    setBookmarks(val) {
        this.bookmarks.next(val)
        let vals = val.map(x=>x['entryID'])
        localStorage.setItem(this.config.L1.name + this.config.build, JSON.stringify(vals));
    }

    toggleBookmark(entry) {
        let i = this.bookmarks.value.indexOf(entry)
        let bookmarks;
        if (i > -1) {
            bookmarks = this.bookmarks.value
            bookmarks.splice(i, 1)
        } else if (i < 0) {
            bookmarks = this.bookmarks.value.concat([entry])
        }
        this.setBookmarks(bookmarks)
    }

}