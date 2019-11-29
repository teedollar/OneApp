import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PayBillsPage } from './pay-bills';
import { TabsPageRoutingModule } from './pay-bills-routing.module';

import { AboutModule } from '../electricity/electricity.module';
import { MapModule } from '../cable/cable.module';
import { ScheduleModule } from '../airtime/airtime.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../data/data.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    PayBillsPage,
  ]
})
export class TabsModule { }
