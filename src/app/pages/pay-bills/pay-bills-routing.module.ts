import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayBillsPage } from './pay-bills';
import { AirtimePage } from '../airtime/airtime';


const routes: Routes = [
  {
    path: 'tabs',
    component: PayBillsPage,
    children: [
      {
        path: 'airtime',
        children: [
          {
            path: '',
            component: AirtimePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'data',
        children: [
          {
            path: '',
            loadChildren: () => import('../data/data.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'cable',
        children: [
          {
            path: '',
            loadChildren: () => import('../cable/cable.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'electricity',
        children: [
          {
            path: '',
            loadChildren: () => import('../electricity/electricity.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/airtime',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

