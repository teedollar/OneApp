import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectricityPage } from './electricity';

const routes: Routes = [
  {
    path: '',
    component: ElectricityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }
