import { Component } from '@angular/core';

@Component({
  templateUrl: 'pay-bills.html'
})
export class PayBillsPage {
	showBalance:boolean = true;
	balance:any = 12300.00;
	hideOrShow = 'Hide';


	toggleShowBalance(){
		if(this.showBalance==true){
			this.showBalance = false;
			this.balance = null;
			this.hideOrShow = 'Show';
		} else {
			this.showBalance = true;
			this.balance = 12300.000;
			this.hideOrShow = 'Hide';
		}
	}
}
