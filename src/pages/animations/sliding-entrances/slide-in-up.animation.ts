import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_IN_UP_ANIMATION =
  trigger('slideInUp', [
      state('in', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(0, 2000px, 0)'
        }),
        animate('1s ease-in-out')
      ])
    ]
  );

// transform: 'translate3d(0, 100%, 0)'

/*

export const SANTA_STATE_ANIMATION =
  trigger('slideInSanta', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'})),
    state('out', style({
      opacity: 0})),
    transition('void => *', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('2s 100ms ease-in')
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

export const SLIDE_IN_UP_ANIMATION =
  trigger('slideInUp', [
      state('in', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(0, 2000px, 0)'
        }),
        animate('1s ease-in-out')
      ])
    ]
  );

*/
