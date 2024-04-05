import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'module-injectable',
    loadChildren: () =>
      import('./module-injectable/module-injectable.module').then(
        (m) => m.ModuleInjectableModule
      ),
  },
  {
    path: 'root-injectable',
    loadChildren: () =>
      import('./root-injectable/root-injectable.module').then(
        (m) => m.RootInjectableModule
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
