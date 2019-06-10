import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Flashcards } from './flashcards';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: Flashcards
      }
    ])
  ],
  declarations: [Flashcards]
})
export class FlashcardsPageModule {}
