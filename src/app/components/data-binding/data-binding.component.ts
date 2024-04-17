import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  protected text1: string = 'Hello World!';
  protected text2: string = 'Hello World!';

  public openAlert(): void {
    alert('I was triggered by an event');
  }
}
