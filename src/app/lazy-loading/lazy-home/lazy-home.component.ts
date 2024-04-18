import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-home',
  templateUrl: './lazy-home.component.html',
})
export class LazyHomeComponent {
  protected title: string = 'Home module component';
  protected subtitle: string = 'Loaded with lazy loading';
}
