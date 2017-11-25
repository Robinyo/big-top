// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// See: http://lathonez.com/2017/ionic-2-unit-testing/

// Order is important, see: https://github.com/angular/zone.js/issues/404

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

// Angular Testing ecosystem

import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { FormsModule } from '@angular/forms';

import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, NavParams, Platform } from 'ionic-angular';
import { ConfigMock, NavParamsMock, PlatformMock } from 'ionic-mocks';

import { LoggerService } from './services/log4ts/logger.service';
import { ConsoleLoggerService } from './services/log4ts/console-logger.service';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare let __karma__: any;
declare let require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function (): void {
  // noop
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/);

// And load the modules.
context.keys().map(context);

// Finally, start Karma to run the tests.
__karma__.start();

/*

// https://github.com/ionic-team/ionic/issues/9331

export class NavParamsMock{
  data = {
  };

  get(param){
    return this.data[param];
  }
}

{provide: NavParams, useClass: NavParamsMock},

*/

export class TestUtils {

  public static beforeEachCompiler(components: Array<any>): Promise<{fixture: any, instance: any}> {
    return TestUtils.configureIonicTestingModule(components)
      .compileComponents().then(() => {
        let fixture: any = TestBed.createComponent(components[0]);
        return {
          fixture: fixture,
          instance: fixture.debugElement.componentInstance,
        };
      });
  }

  public static configureIonicTestingModule(components: Array<any>): typeof TestBed {
    return TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      providers: [
        App, Form, Keyboard, DomController, MenuController, NavController,
        {provide: Platform, useFactory: () => PlatformMock.instance()},
        {provide: Config, useFactory: () => ConfigMock.instance()},
        {provide: NavParams, useFactory: () => NavParamsMock.instance()},
        {provide: LoggerService, useClass: ConsoleLoggerService}
      ],
      imports: [
        FormsModule,
        IonicModule
      ],
    });
  }

  // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript

  public static eventFire(el: any, etype: string): void {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      let evObj: any = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
}
