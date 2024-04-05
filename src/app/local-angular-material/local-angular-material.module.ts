import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [MatButtonModule, MatDialogModule, MatInputModule],
  imports: [MatButtonModule, MatDialogModule, MatInputModule],
})
export class LocalAngularMaterialModule {}
