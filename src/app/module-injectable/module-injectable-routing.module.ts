import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleAccessComponent } from './components/module-access/module-access.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'module-access',
        component: ModuleAccessComponent,
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ModuleInjectableRoutingModule {}
