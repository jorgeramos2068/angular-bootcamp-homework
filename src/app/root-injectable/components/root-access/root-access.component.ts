import { Component } from '@angular/core';
import { RootService } from '../../../services/root.service';

@Component({
  selector: 'app-root-access',
  templateUrl: './root-access.component.html',
})
export class RootAccessComponent {
  constructor(private rootService: RootService) {}

  public getPersistentValue(): string {
    return this.rootService.persistentData;
  }
}
