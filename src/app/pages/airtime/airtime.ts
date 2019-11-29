import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'page-airtime',
  templateUrl: 'airtime.html',
  styleUrls: ['./airtime.scss'],
})
export class AirtimePage implements OnInit {

  amount:number = 200;

  constructor(
    //public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    private counter: CounterService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    //this.amount = this.counter.count
  }

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
      header: 'Airtime Top Up',
      subHeader: 'MTN Recharge',
      message: 'You just made a purchase of MTN airtime of NGN500. Thank you for using OneApp',
      buttons: ['OK']
    });

    await alert.present();
  }

}
