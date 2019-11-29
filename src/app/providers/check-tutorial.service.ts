import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  constructor(private storage: Storage, private router: Router) {}

  canLoad() {
    return this.storage.get('seen_welcome_msg').then(res => {
      if (res) {
        this.router.navigate(['/app', 'tabs', 'airtime']);
        return false;
      } else {
        return true;
      }
    });
  }
}
