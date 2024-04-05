import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
})
export class AngularMaterialComponent {
  protected name: string = '';

  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((newName: string | undefined) => {
      this.name = newName ?? '';
    });
  }
}
