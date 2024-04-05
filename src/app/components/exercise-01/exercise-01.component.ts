import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-01',
  templateUrl: './exercise-01.component.html',
  styles: `
    .redText {
      color: red;
    }
  `,
})
export class Exercise01Component {
  protected active: boolean = false;
  protected activeStyle: boolean = false;

  public toggleActive(): void {
    this.active = !this.active;
  }

  public toggleActiveStyle(): void {
    this.activeStyle = !this.activeStyle;
  }
}
