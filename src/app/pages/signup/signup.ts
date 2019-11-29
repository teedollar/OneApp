import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  phone = '';
  lName = '';
  fName = '';
  email = '';
  referalCode = '';
  password = '';
  submitted = false;
  code = '';
  hasCode = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.userData.signup(this.fName+' '+ this.lName );
      this.router.navigateByUrl('/app/tabs/airtime');
    }
  }

  onLogin(){
    this.router.navigateByUrl('/login');
  }

   noSignup(){
    this.router.navigateByUrl('/app/tabs/airtime');
  }
  showReferal(){
    this.hasCode = true;
  }
}
