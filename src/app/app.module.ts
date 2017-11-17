import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Welcome pages
import { IntroductionPage } from '../pages/introduction/introduction';

// Account pages
import { SignInPage } from '../pages/sign-in/sign-in';

// Logging Service
import { LoggerService } from '../services/log4ts/logger.service';
import { ConsoleLoggerService } from '../services/log4ts/console-logger.service';

@NgModule({
  declarations: [
    MyApp,
    IntroductionPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroductionPage,
    SignInPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LoggerService, useClass: ConsoleLoggerService}
  ]
})

export class AppModule {}

