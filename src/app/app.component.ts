import { Component } from '@angular/core';

import { Platform, Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { LoggerService } from '../services/log4ts/logger.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = HomePage;
  selectedTheme:String = 'green-and-blue-theme';

  constructor(platform: Platform,
              public event: Events,
              private logger: LoggerService) {

    this.logger.info('MyApp initialised');

    platform.ready().then(() => {

      event.subscribe('theme:toggle', () => {
        this.toggleTheme();
      });
      
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


