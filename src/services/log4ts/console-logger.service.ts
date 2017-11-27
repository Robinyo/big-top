import { ENV } from '@env';

import { Injectable } from '@angular/core';

import { Logger } from './logger';

export let isDebugMode = ENV.isDebugMode;
// export let isDebugMode = true;

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements Logger {

  get info() {
    if (isDebugMode) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  get warn() {
    if (isDebugMode) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }

  get error() {
    if (isDebugMode) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }
}
