import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BigTopApp } from './app.component';

// Welcome pages
import { IntroductionPage } from '@pages/introduction/introduction';

// Account pages
import { SignInPage } from '@pages/sign-in/sign-in';

// Event pages
import { TabsPage } from '@pages/tabs/tabs';
import { EventsPage } from '@pages/events/events';
import { SearchPage } from '@pages/search/search';

// Logging Services
import { LoggerService } from '@services/log4ts/logger.service';
import { ConsoleLoggerService } from '@services/log4ts/console-logger.service';

@NgModule({
  declarations: [
    BigTopApp,
    IntroductionPage,
    SignInPage,
    TabsPage,
    EventsPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    IonicModule.forRoot(BigTopApp, {}, {
      links: [
        { component: IntroductionPage, name: 'Introduction', segment: 'introduction' },
        { component: SignInPage, name: 'SignInPage', segment: 'sign-in' },
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: EventsPage, name: 'Events', segment: 'events' },
        { component: SearchPage, name: 'Search', segment: 'search' }
      ]
    })
    // , IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BigTopApp,
    IntroductionPage,
    SignInPage,
    TabsPage,
    EventsPage,
    SearchPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LoggerService, useClass: ConsoleLoggerService}
  ]
})
export class AppModule {}
