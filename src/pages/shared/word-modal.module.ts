import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WordModal } from './word-modal.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: WordModal
      }
    ])
  ],
  declarations: [WordModal]
})
export class WordModalPageModule {}
