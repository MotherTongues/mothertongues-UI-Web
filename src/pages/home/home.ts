import { Component } from '@angular/core';
import { MTDService } from '../../services/mtd.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  language$: Observable<string>;
  constructor(private mtdService: MTDService) {
    this.language$ = this.mtdService.name$
  }

}
