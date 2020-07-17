import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  MtdService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../core/core.module';

@Component({
  selector: 'mtd-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../about/about/about.component.scss',
    '../../../../app/app/app.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(public mtdService: MtdService) {}

  ngOnInit(): void {}
}
