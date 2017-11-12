import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { LoggerService } from '../services/log4ts/logger.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform,
              private logger: LoggerService) {

    platform.ready().then(() => {

      // this.logger.info('MyApp initialised');

    });
  }
}


