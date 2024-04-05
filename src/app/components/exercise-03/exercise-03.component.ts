import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-03',
  templateUrl: './exercise-03.component.html',
})
export class Exercise03Component {
  protected lowercaseString: string = 'custom string in lowercase';
  protected uppercaseString: string = 'CUSTOM STRING IN UPPERCASE';
  protected otherString: string = 'Other String In Other Case';
}
