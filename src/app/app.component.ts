import { Component } from '@angular/core';

import { Platform, Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { LoggerService } from '../services/log4ts/logger.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = HomePage;
  selectedTheme: String;

  constructor(platform: Platform,
              public event: Events,
              private logger: LoggerService) {

    event.subscribe('toggle:theme', () => {
      this.toggleTheme();
    });

    platform.ready().then(() => {

      this.logger.info('MyApp initialised');
      this.selectedTheme = 'green-and-blue-theme';
    });
  }

  toggleTheme() {

    this.logger.info('MyApp: toggleTheme()');

    if (this.selectedTheme === 'facebook-messenger-theme') {
      this.selectedTheme = 'green-and-blue-theme';
    } else {
      this.selectedTheme = 'facebook-messenger-theme';
    }
  }
}


