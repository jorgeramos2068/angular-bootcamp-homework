import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-04',
  templateUrl: './exercise-04.component.html',
})
export class Exercise04Component {
  protected text1: string = 'Hello World!';
  protected text2: string = 'Hello World!';

  public openAlert(): void {
    alert('I was triggered by an event');
  }
}
