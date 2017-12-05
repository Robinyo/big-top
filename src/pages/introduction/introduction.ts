import { Component, ViewChild, OnInit } from '@angular/core';

import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { SignInPage } from '@pages/sign-in/sign-in';

import { LoggerService } from '@services/log4ts/logger.service';

// import {FLY_IN_OUT} from "@pages/animations/animation";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
  animations: [

    trigger('flyInBottomSlow', [
      state('in', style({transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({transform: 'translate3d(0, 2000px, 0'}),
        animate('1s ease-in-out')
      ])
    ])

  ]
})
export class IntroductionPage implements OnInit {

  @ViewChild(Slides) private slides: Slides;

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
    // let currentIndex = this.slides.getActiveIndex();
    // this.logger.info('Current index is ' + currentIndex);
  }

  public nextPage() {
    this.logger.info('IntroductionPage: nextPage()');
    this.navCtrl.push(this.component);
  }
}
