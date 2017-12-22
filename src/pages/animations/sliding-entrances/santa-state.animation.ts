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
      animate('100ms ease-in')
    ]),
    transition('in => out', [
      animate('100ms ease-out', style({
        transform: 'translateX(100%)'
      }))
    ])
  ]);

/*

animations: [
  trigger('heroState', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
]

export const santaState =
  trigger('santaState', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('1s 100ms')
      ]),
      transition('* => void', [
        animate('1s 100ms', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ]
  );

*/
