import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntryList } from './entry-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [EntryList],
    exports: [EntryList]
})
export class EntryListModule { }
