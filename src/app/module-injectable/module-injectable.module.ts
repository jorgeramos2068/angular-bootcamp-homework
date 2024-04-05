import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAccessComponent } from './components/module-access/module-access.component';
import { ModuleInjectableRoutingModule } from './module-injectable-routing.module';
import { ModuleService } from '../services/module.service';

@NgModule({
  declarations: [ModuleAccessComponent],
  exports: [ModuleAccessComponent],
  imports: [CommonModule, ModuleInjectableRoutingModule],
  providers: [ModuleService],
})
export class ModuleInjectableModule {}
