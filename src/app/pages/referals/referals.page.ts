import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'referals',
  templateUrl: './referals.page.html',
  styleUrls: ['./referals.page.scss'],
})
export class ReferalsPage implements OnInit {
	code:string = "";

  constructor(
  	private clipboard: Clipboard,
  	public toast: ToastController,
  	public share: SocialSharing
  	) { }

  ngOnInit() {

  }
  copyCode() {
    this.clipboard.copy(this.code);
    this.presentToast();
  }

  shareCode() {
  	this.share.share('Hello, I discovered this amazing app that gives me discounts on bill payment such as eletricity, Data, Cable and aortime. Please use my code' +this.code+ ' to register and start enjoying discounts', 'Register for Bills Padi and get cheaper deals on bills payment', 'http://billspadi.com.ng').then(() => {
	  // Sharing  is possible
	}).catch(() => {
	  // Sharing is not possible
	});
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Referal code has been copied to clipboard.',
      duration: 2000,
      header: 'Code Copied',
      position: 'middle',

    });
    toast.present();
  }
}
