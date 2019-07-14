import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatIcon } from '@angular/material'

import { SearchComponent } from './search';
import { EntryListModule } from '../shared/entry-list.module';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    EntryListModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent
      }
    ])
  ],
  declarations: [SearchComponent],
//   entryComponents: []
})
export class SearchPageModule {}
