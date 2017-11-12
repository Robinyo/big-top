import { Injectable } from '@angular/core';

import { Logger } from './logger';

const noop = (): any => undefined;

@Injectable()
export class LoggerServiceMock implements Logger {

  get info() {
    return noop;
  }

  get warn() {
    return noop;
  }

  get error() {
    return noop;
  }
}
