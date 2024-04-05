import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/dialog.interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) protected data: DialogData) {}
}
