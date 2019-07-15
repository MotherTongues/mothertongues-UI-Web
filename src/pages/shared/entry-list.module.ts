import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { PipesModule } from '../../pipes/pipes.module';

import { EntryList } from './entry-list.component';
import { FileNotFoundDialog } from './file-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatSelectModule,
        PipesModule,
    ],
    declarations: [EntryList, FileNotFoundDialog],
    entryComponents: [FileNotFoundDialog],
    exports: [EntryList]
})
export class EntryListModule { }
