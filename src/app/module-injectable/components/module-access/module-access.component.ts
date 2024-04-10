import { Component } from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { RootService } from '../../../services/root.service';

@Component({
  selector: 'app-module-access',
  templateUrl: './module-access.component.html',
})
export class ModuleAccessComponent {
  constructor(
    private moduleService: ModuleService,
    private rootService: RootService
  ) {}

  public getServiceValue(): string {
    return this.moduleService.serviceVariable;
  }

  public getPersistentValue(): string {
    return this.rootService.persistentData;
  }
}
