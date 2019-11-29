import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'], 
})
export class TutorialPage {
  showSkip = true;

  @ViewChild('slides', {static: true}) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/airtime')
      .then(() => this.storage.set('seen_welcome_msg', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('seen_welcome_msg').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/airtime');
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }
  goToNextSlide() {
    this.slides.slideNext();
  }
  goToPrevSlide() {
    this.slides.slidePrev();
  }


}
