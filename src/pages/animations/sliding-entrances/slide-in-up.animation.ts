import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_IN_UP_ANIMATION =
  trigger('slideInUp', [
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
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
