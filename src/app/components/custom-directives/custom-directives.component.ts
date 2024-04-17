import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
})
export class CustomDirectivesComponent {
  protected lowercaseString: string = 'custom string in lowercase';
  protected uppercaseString: string = 'CUSTOM STRING IN UPPERCASE';
  protected otherString: string = 'Other String In Other Case';
}
