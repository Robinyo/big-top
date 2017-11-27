import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoggerService } from '@services/log4ts/logger.service';

interface CardInterface {
  name: string;
  location: string;
  day: string;
  month: string;
  year: string;
  img: string;
}

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private location: String = 'Kingston, ACT';

  private cards: CardInterface[] = [
    {
      name: 'Innovation Showcase 2017',
      location: 'Canberra Fitters Workshop',
      day: '7',
      month: 'DEC',
      year: '2017',
      img: 'innovation-showcase.png'
    },
    {
      name: 'Heritage Tours',
      location: 'Canberra Glassworks',
      day: '25',
      month: 'NOV',
      year: '2017',
      img: 'heritage-tours.png'
    },
    {
      name: 'Summer Sensations',
      location: 'Canberra Glassworks',
      day: '10',
      month: 'JAN',
      year: '2018',
      img: 'summer-sensations.png'
    },
    {
      name: 'Renewable Energy Day 2017',
      location: 'Visit renewable energy sites throughout the ACT',
      day: '25',
      month: 'NOV',
      year: '2017',
      img: 'renewable-energy-day.png'
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private logger: LoggerService) {

    this.logger.info('EventsPage initialised');
  }

  public toggleLocation() {
    this.logger.info('EventsPage: toggleLocation()');
  }

  public goToEvent(card: any) {
    this.logger.info('EventsPage: goToEvent()');
  }
}

// https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.ts

/*

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  public inAppBrowser: InAppBrowser

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }

*/
