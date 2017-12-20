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

  /*

  get info() {
    if (isDebugMode) {
      return this.bind(console.info, console);
    } else {
      return noop;
    }
  }

  */

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

  /*

  private bind(fn: Function, context: any): Function {
    return function() {
      return fn.apply(context, arguments);
    };
  }

  */
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// https://github.com/Microsoft/TypeScript/wiki/%27this%27-in-TypeScript#functionbind
// https://github.com/Raynos/function-bind/blob/master/implementation.js

/*

  get info() {
    if (isDebugMode) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  bind(fn: Function, context: Object): Function {
    return function() {
      return fn.apply(context, arguments);
    };
  }

  get info() {
    if (isDebugMode) {
      return this.bind(console.info, console);
    } else {
      return noop;
    }
  }

 */
