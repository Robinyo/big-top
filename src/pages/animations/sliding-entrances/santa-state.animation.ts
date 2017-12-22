import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const SANTA_STATE_ANIMATION =
  trigger('santaState', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'})),
    state('out', style({
      opacity: 0})),
    transition('void => *', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('2s ease-in')
    ]),
    transition('out => in', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('200ms ease-in')
    ]),
    transition('in => out', [
      animate('200ms ease-out', style({
        transform: 'translateX(100%)'
      }))
    ])
  ]);

/*

export const SANTA_STATE_ANIMATION =
  trigger('santaState', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'})),
    state('out', style({
      opacity: 0})),
    transition('void => *', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('2s ease-in')
    ]),
    transition('out => in', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('100ms ease-in')
    ]),
    transition('in => out', [
      animate('100ms ease-out', style({
        transform: 'translateX(100%)'
      }))
    ])
  ]);

export const SANTA_STATE_ANIMATION =
  trigger('santaState', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'})),
    state('out', style({
      opacity: 0})),
    transition('void => *', [
      style({
        transform: 'translateX(100%)'
      }),
      animate('2s ease-in')
    ]),
    transition('out => in', [
      style({
        transform: 'translateX(100%)'
      }),
      animate('2s ease-in')
    ]),
    transition('in => out', [
      animate('2s ease-out', style({
        transform: 'translateX(-100%)'
      }))
    ])
  ]);

*/
