import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const slideInLeft =
  trigger('slideInLeft', [
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0)'
        }),
        animate('1s 200ms ease-in')
      ]),
      transition('* => void', [
        animate('1s 200ms ease-out', style({
          opacity: 0,
          transform: 'translate3d(0, 0, 0)'
        }))
      ])
    ]
  );
