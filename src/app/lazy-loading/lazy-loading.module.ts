import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyWithParamsComponent } from './lazy-with-params/lazy-with-params.component';

@NgModule({
  declarations: [LazyHomeComponent, LazyWithParamsComponent],
  imports: [CommonModule, LazyLoadingRoutingModule],
})
export class LazyLoadingModule {}
