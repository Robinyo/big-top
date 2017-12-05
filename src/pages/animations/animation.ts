import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const FLY_IN_OUT =
  trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('1s 400ms ease-in')
      ]),
      transition('* => void', [
        animate('1s 400ms ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ]
  );

/*

export const FLY_IN_OUT =
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate('1s 400ms')
    ]),
    transition('* => void', [
      animate('400ms', style({transform: 'translateX(100%)'}))
    ])
  ]
);

export const FLY_IN_OUT =
  trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1s 400ms ease-in')
    ]),
    transition('* => void', [
      animate('1s 400ms ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ]
);

export const FLY_IN_OUT =
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate('1s 400ms', keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate('1s 400ms', keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ]
);

*/
