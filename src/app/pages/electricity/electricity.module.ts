import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ElectricityPage } from './electricity';
import { AboutPageRoutingModule } from './electricity-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [ElectricityPage],
  entryComponents: [],
  bootstrap: [ElectricityPage],
})
export class AboutModule {}
