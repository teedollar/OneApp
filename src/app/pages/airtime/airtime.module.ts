import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AirtimePage } from './airtime';

import { SchedulePageRoutingModule } from './airtime-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule
  ],
  declarations: [
    AirtimePage,
  ],
  entryComponents: [
  ]
})
export class ScheduleModule { }
