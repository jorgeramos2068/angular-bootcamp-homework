import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyWithParamsComponent } from './lazy-with-params/lazy-with-params.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LazyHomeComponent,
      },
      {
        path: 'lazy-with-params/:id',
        component: LazyWithParamsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}
