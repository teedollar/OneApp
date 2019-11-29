import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
	amount:number = 0;
	accountNumber:number;
	newBeneficiary:boolean = true;
	beneficiary:boolean = true;
  constructor(
  	private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
  	 console.log(this.navParams);
    this.amount = this.navParams.data.amount;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  saveBeneficiary(){
  	this.beneficiary = false;
  }
}
