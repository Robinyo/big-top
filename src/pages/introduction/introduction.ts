import { Component, OnInit, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { SignInPage } from '@pages/sign-in/sign-in';

import { SLIDE_IN_UP_ANIMATION } from '@pages/animations/sliding-entrances/slide-in-up.animation';

import { LoggerService } from '@services/log4ts/logger.service';

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
  animations: [ SLIDE_IN_UP_ANIMATION ]
})
export class IntroductionPage implements OnInit {

  @ViewChild(Slides) private slides: Slides;

  public slide1State: any = 'out';
  public slide2State: any = 'out';

  private component: any = SignInPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private logger: LoggerService) {

    this.logger.info('IntroductionPage initialised');
  }

  public ngOnInit() {

    this.logger.info('IntroductionPage: ngOnInit()');

    this.slides.spaceBetween = 100;
    // this.slides.autoplay = 2000;
    this.slides.pager = true;
    this.slides.paginationType = 'bullets';  // 'bullets', 'fraction' or 'progress';
  }

  public slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.logger.info('Current index is ' + currentIndex);

    if (currentIndex === 1) {
      this.slide1State = (this.slide1State === 'in') ? 'out' : 'in';
    }
  }

  public nextPage() {
    this.logger.info('IntroductionPage: nextPage()');
    this.navCtrl.push(this.component);
  }
}

/*

    if (currentIndex === 1) {
      this.slide1State = (this.slide1State === 'in') ? 'out' : 'in';
    }

*/
