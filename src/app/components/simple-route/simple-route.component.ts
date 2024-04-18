import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-route',
  templateUrl: './simple-route.component.html',
  styles: `
    .redText {
      color: red;
    }
  `,
})
export class SimpleRouteComponent {
  protected title: string = 'Simple route component';
}
