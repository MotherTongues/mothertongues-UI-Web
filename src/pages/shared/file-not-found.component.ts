import { Component, Input, Inject, OnChanges, SimpleChange } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'file-not-found-dialog',
    templateUrl: 'file-not-found-dialog.html',
})
export class FileNotFoundDialog {

    constructor(
        public dialogRef: MatDialogRef<FileNotFoundDialog>,
        @Inject(MAT_DIALOG_DATA) public data) { }

    close(): void {
        this.dialogRef.close();
    }

}
