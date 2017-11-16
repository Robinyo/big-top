/**
 * The Application component for the Big Top App.
 */

import { Component, ViewChild } from '@angular/core';

import { Content, Events, Nav, Platform } from 'ionic-angular';

import { IntroductionPage } from '../pages/introduction/introduction';

import { LoggerService } from '../services/log4ts/logger.service';

import { ENV } from '@app/env';
let isDebugMode = ENV.isDebugMode;

const noop = (): any => undefined;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;

  rootPage:any = IntroductionPage;
  pages: Array<{title: string, component: any, icon: string}>;

  theme:String = 'facebook-messenger-theme';

  constructor(public platform: Platform,
              public event: Events,
              private logger: LoggerService) {

    this.pages = [
      { title: 'My Account', component: IntroductionPage, icon: 'person' }
    ];

    this.initializeApp();
  }

  initializeApp() {

    this.getPlatformInfo();

    this.platform.ready().then(() => {
      this.setDisableScroll(true);
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  toggleTheme() {

    this.logger.info('MyApp: toggleTheme()');

    if (this.theme === 'facebook-messenger-theme') {
      this.theme = 'green-and-blue-theme';
    } else {
      this.theme = 'facebook-messenger-theme';
    }
  }

  // https://ionicframework.com/docs/api/platform/Platform/

  private getPlatformInfo() {

    if (isDebugMode) {

      this.logger.info('Big Top App initialised');

      if (this.platform.is('mobileweb') || this.platform.is('core')) {
        this.logger.info('The Application is running in a browser');
      } else {
        this.logger.info('The Application is running on a device');
      }

      if (this.platform.is('ios')) {
        this.logger.info('The Platform is iOS');
      } else if (this.platform.is('android')) {
        this.logger.info('The Platform is Android');
      } else if (this.platform.is('windows')) {
        this.logger.info('The Platform is Windows');
      }
    } else {
      return noop;
    }
  }

  /**
   * @param {boolean} disable  Show/Hide the vertical scrollbar
   *
   * @example
   * this.setDisableScroll(true);
   *
   * @returns {void}
   */
  private setDisableScroll(disable: boolean) : void {

    let scroll = this.content.getScrollElement();
    scroll.style.overflowY = disable ? 'hidden' : 'scroll';
  }
}

/*

  // rootPage:any = HomePage;

  platform.ready().then(() => {

    event.subscribe('theme:toggle', () => {
      this.toggleTheme();
    });

  });

*/
