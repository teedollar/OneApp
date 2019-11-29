import { Component,  } from '@angular/core';
import { Platform, AlertController} from '@ionic/angular';
import { CounterService } from '../../providers/counter.service'

@Component({
  selector: 'page-cable',
  templateUrl: 'cable.html',
  styleUrls: ['./cable.scss']
})
export class CablePage  {
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
   this.amount -= 50
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
