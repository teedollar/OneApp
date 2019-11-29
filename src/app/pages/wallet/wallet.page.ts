import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rave, RavePayment, Misc } from 'rave-ionic4';
import { AlertController, ModalController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { WithdrawPage } from '../withdraw/withdraw.page';
import { Router } from '@angular/router';

@Component({
  selector: 'wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
transaction:any;
def_amount:number = 5000;
amount:number = 0.00;

  constructor(
  private rave: Rave, 
  private ravePayment: RavePayment, 
  private misc: Misc,
  private iab: InAppBrowser,
  public alertController: AlertController,
  public modal: ModalController, public router: Router
    ) { }

  ngOnInit() {
    this.transaction = "all";
  }

  transactionType(type) {
    this.transaction = type;
   }

  ngAfterViewInit() {
 }

 addMoney() {
      this.rave.init(true, "FLWPUBK-cb0a5eaf22a1ae04ef3df4826d220361-X")
      .then(_ => {
        var paymentObject = this.ravePayment.create({
          customer_email: "ebuks@example.com",
          amount: this.amount,
          customer_phone: "23409012940409",
          currency: "NGN",
          txref: "rave-123456",
          meta: [{
              metaname: "flightID",
              metavalue: "AP1234"
          }]
      })
        this.rave.preRender(paymentObject)
          .then(secure_link => {
            secure_link = secure_link +" ";
            const browser: InAppBrowserObject = this.rave.render(secure_link, this.iab);
            browser.on("loadstop")
                .subscribe((event: InAppBrowserEvent) => {
                  if(event.url.indexOf('https://your-redirect-url') != -1) {
                    if(this.rave.paymentStatus('url') == 'failed') {
                      this.presentAlert("Message", "Oops! Transaction failed");
                    }else {
                      this.presentAlert("Message", "Transaction Succesful");

                    }
                    browser.close()
                  }
                })
          }).catch(error => {
            // Error or invalid paymentObject passed in
          })
      })

    }

    /*addMoney() {
      this.router.navigateByUrl('/paystack');
    }*/

    WithdrawMoney(){
      this.presentModal();

    }


  async presentAlert(title, msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: title,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modal.create({
      component: WithdrawPage,
      componentProps: { 
        amount: this.amount,
      }
    });
    return await modal.present();
  }


}
