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

  // https://ionicframework.com/docs/api/navigation/NavController/

  public nextPage() {

    // The property 'animation' understands the following values: md-transition, ios-transition and wp-transition.

    let navOptions = {
      animation: 'slide-transition'
      // animate	  boolean	Whether or not the transition should animate.
      // animation	string	What kind of animation should be used.
      // direction	string	The conceptual direction the user is navigating. For example, is the user navigating forward, or back?
      // duration	  number	The length in milliseconds the animation should take.
      // easing	    string	The easing for the animation.
    };

    this.logger.info('IntroductionPage: nextPage()');
    this.navCtrl.push(this.component, null, navOptions);
  }
}

/*

    let navOptions = {
      animation: 'ios-transition'
    };

    if (currentIndex === 1) {
      this.slide1State = (this.slide1State === 'in') ? 'out' : 'in';
    }

*/
