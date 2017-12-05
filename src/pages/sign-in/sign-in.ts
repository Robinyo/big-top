import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsPage } from '@pages/tabs/tabs';
import { regexValidators } from '@pages/validators/validator';

import { LoggerService } from '@services/log4ts/logger.service';

// import {FLY_IN_OUT} from "@pages/animations/animation";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: './sign-in.html',
  animations: [

    trigger('flyInBottomSlow', [
      state('in', style({transform: 'translate3d(0, 0, 0)'})),
      transition('void => *', [
        style({transform: 'translate3d(0, 2000px, 0'}),
        animate('4s ease-in-out')
      ])
    ]),

    trigger('flyInOutEmail', [
        state('in', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('1s 200ms ease-in')
        ]),
        transition('* => void', [
          animate('1s 200ms ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ]
    ),

    trigger('flyInOutPassword', [
        state('in', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('2s 200ms ease-in')
        ]),
        transition('* => void', [
          animate('2s 200ms ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ]
    ),

    trigger('flyInOutSignIn', [
        state('in', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('3s 200ms ease-in')
        ]),
        transition('* => void', [
          animate('3s 200ms ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ]
    ),

    trigger('flyInOutForgotYourPassword', [
        state('in', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('3s 200ms ease-in')
        ]),
        transition('* => void', [
          animate('3s 200ms ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ]
    )

  ]
})
export class SignInPage {

  public credentialsForm: FormGroup;

  public submitted: boolean = false;

  // component = EventsPage;

  public emailState: any = 'out';
  public passwordState: any = 'in';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private logger: LoggerService) {

    this.logger.info('SignInPage initialised');

    this.credentialsForm = this.formBuilder.group({

      email: [
        'chunkylover53@aol.com',
        Validators.compose([Validators.pattern(regexValidators.email), Validators.required])
      ],
      password: [
        'NoM@reSecrets1',
        Validators.compose([Validators.pattern(regexValidators.password), Validators.required])
      ]

      /*

      email: [''],
      password: ['']

      email: ['', Validators.required],
      password: ['', Validators.required]

      email: [
        'chunkylover53@aol.com',
        Validators.compose([Validators.pattern(regexValidators.email), Validators.required])
      ],
      password: [
        'NoM@reSecrets1',
        Validators.compose([Validators.pattern(regexValidators.password), Validators.required])
      ]

      */

    });
  }

  /*

  public onKeyUp(event: any) {

    this.logger.info('SignInPage: onKeyUp()');

    let newValue = event.target.value;

    // Alphanumberic + space
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');

    if (regExp.test(newValue)) {
      this.logger.info('value: ' + event.target.value);
    } else {
      event.target.value = newValue.slice(0, -1);
      this.logger.info('value: ' + event.target.value);
    }
  }

  */

  public onSignIn() {

    this.submitted = true;

    this.logger.info('SignInPage: onSignIn()');
    this.logger.info('Email: ' + this.credentialsForm.controls['email'].value);
    this.logger.info('Password: ' + this.credentialsForm.controls['password'].value);

    if (this.credentialsForm.valid) {
      this.navCtrl.push(TabsPage);
    }
  }

  public onForgotPassword() {
    this.logger.info('SignInPage: onForgotPassword()');
  }
}

/*

 if (this.credentialsForm.dirty && this.credentialsForm.valid) {

  email: AbstractControl;

*/
