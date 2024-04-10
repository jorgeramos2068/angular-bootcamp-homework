import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootAccessComponent } from './components/root-access/root-access.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'root-access',
        component: RootAccessComponent,
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RootInjectableRoutingModule {}
