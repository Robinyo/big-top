import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_IN_LEFT_ANIMATION =
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

// https://angular.io/guide/animations#example-entering-and-leaving
// Note that in this case the styles are applied to the void state directly in the transition definitions, and not in
// a separate state(void) definition. Thus, the transforms are different on enter and leave: the element enters from
// the left and leaves to the right.
