import { Component, ViewEncapsulation } from '@angular/core';
import { CounterService } from '../../providers/counter.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'page-electricity',
  templateUrl: 'electricity.html',
  styleUrls: ['./electricity.scss'],
})

export class ElectricityPage {
  amount:number = 200;

  constructor(
    public counter: CounterService, public alertController: AlertController
    ) {}

  addCount(){
   //this.amount = this.counter.increaseCount();
   this.amount += 50;
  }

  reduceCount(){
   //this.amount = this.counter.reduceCount();
   this.amount -= 50;
  }

  async topUp() {
    const alert = await this.alertController.create({
        header: 'Electricity Bill Payment',
        subHeader: 'IBEDC Payment',
        message: 'Your IBEDC Electricity Bill Payment was successful. Thank you for using OneApp',
        buttons: ['OK']
      });

      await alert.present();
  }
}
