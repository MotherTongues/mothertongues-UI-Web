import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { META } from '../../../../config/config';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

export interface Contributor {
  text: string;
  img: string | false;
  name: string;
  title: string;
}

@Component({
  selector: 'mtd-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    '../../../../app/app/app.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  contributors = META.contributors;
  constructor() {}

  ngOnInit() {}
}
