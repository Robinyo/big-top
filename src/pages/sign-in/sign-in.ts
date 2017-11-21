import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { TabsPage } from '../tabs/tabs';
import { TabsPage } from '@pages/tabs/tabs';
// import { regexValidators } from '../validators/validator';
import { regexValidators } from '@pages/validators/validator';

import { LoggerService } from '../../services/log4ts/logger.service';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  credentialsForm: FormGroup;

  submitted: boolean = false;

  // component = EventsPage;

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

  onSignIn() {

    this.submitted = true;

    this.logger.info('SignInPage: onSignIn()');
    this.logger.info('Email: ' + this.credentialsForm.controls['email'].value);
    this.logger.info('Password: ' + this.credentialsForm.controls['password'].value);

    if (this.credentialsForm.valid) {
      this.navCtrl.push(TabsPage);
    }
  }

  onForgotPassword() {
    this.logger.info('SignInPage: onForgotPassword()');
  }
}

/*

 if (this.credentialsForm.dirty && this.credentialsForm.valid) {

  email: AbstractControl;

*/
