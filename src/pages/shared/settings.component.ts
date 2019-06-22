import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface SettingsDialogData {
    name: string;
}

@Component({
    selector: 'settings-dialog',
    templateUrl: 'settings.component.html',
})
export class SettingsDialog {

    constructor(
        public dialogRef: MatDialogRef<SettingsDialog>,
        @Inject(MAT_DIALOG_DATA) public data: SettingsDialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}