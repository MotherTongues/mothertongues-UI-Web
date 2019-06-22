import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, } from '@angular/material';

import { SettingsDialog } from './settings.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
    ],
    declarations: [SettingsDialog],
    exports: [SettingsDialog]
})
export class SettingsModule { }
