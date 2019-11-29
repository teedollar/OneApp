import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CablePage } from './cable';

const routes: Routes = [
  {
    path: '',
    component: CablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPageRoutingModule { }
