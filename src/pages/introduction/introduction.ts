import { Component, ViewChild, OnInit } from '@angular/core';

import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { LoggerService } from '@services/log4ts/logger.service';

import { SignInPage } from '@pages/sign-in/sign-in';

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage implements OnInit {

  @ViewChild(Slides) slides: Slides;

  component = SignInPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private logger: LoggerService) {

    this.logger.info('IntroductionPage initialised');
  }

  ngOnInit() {

    this.logger.info('IntroductionPage: ngOnInit()');

    this.slides.spaceBetween = 100;
    // this.slides.autoplay = 2000;
    this.slides.pager = true;
    this.slides.paginationType = 'bullets';  // 'bullets', 'fraction' or 'progress';
  }

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // this.logger.info('Current index is ' + currentIndex);
  }

  nextPage() {
    this.logger.info('IntroductionPage: nextPage()');
    this.navCtrl.push(this.component);
  }
}
