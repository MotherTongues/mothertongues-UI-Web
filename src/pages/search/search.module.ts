import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatFormFieldModule, } from '@angular/material'

import { Search } from './search';
import { EntryListModule } from '../shared/entry-list.module';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    EntryListModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: Search
      }
    ])
  ],
  declarations: [Search],
//   entryComponents: []
})
export class SearchPageModule {}
