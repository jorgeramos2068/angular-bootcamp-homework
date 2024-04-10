import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootAccessComponent } from './components/root-access/root-access.component';
import { RootInjectableRoutingModule } from './root-injectable-routing.module';

@NgModule({
  declarations: [RootAccessComponent],
  exports: [RootAccessComponent],
  imports: [CommonModule, RootInjectableRoutingModule],
})
export class RootInjectableModule {}
