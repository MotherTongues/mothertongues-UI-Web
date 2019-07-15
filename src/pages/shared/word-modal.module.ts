import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WordModal } from './word-modal.component';
import { PipesModule } from '../../pipes/pipes.module';

import { FileNotFoundDialog } from './file-not-found.component';

import { MatButtonModule, MatIconModule, MatSelectModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: WordModal
      }
    ])
  ],
  declarations: [WordModal],
  entryComponents: [FileNotFoundDialog],
  exports: [WordModal]
})
export class WordModalPageModule { }

