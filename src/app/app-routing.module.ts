import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'simple-route',
    component: SimpleRouteComponent,
    pathMatch: 'full',
  },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
