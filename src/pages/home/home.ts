import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

import { LoggerService } from '../../services/log4ts/logger.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public event: Events,
              private logger: LoggerService) {

    this.logger.info('HomePage initialised');
  }

  toggleTheme() {
    this.logger.info('HomePage: toggleTheme()');
    this.event.publish('toggle:theme');
  }
}
