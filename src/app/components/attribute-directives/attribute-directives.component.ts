import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styles: `
    .redText {
      color: red;
    }
  `,
})
export class AttributeDirectivesComponent {
  protected active: boolean = false;
  protected activeStyle: boolean = false;

  public toggleActive(): void {
    this.active = !this.active;
  }

  public toggleActiveStyle(): void {
    this.activeStyle = !this.activeStyle;
  }
}
