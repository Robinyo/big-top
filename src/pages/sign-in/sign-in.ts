import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';

import { LoggerService } from '../../services/log4ts/logger.service';

import { regexValidators } from '../validators/validator';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  form: FormGroup;

  submitted: boolean = false;

  // component = EventsPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private logger: LoggerService) {

    this.logger.info('SignInPage initialised');

    this.form = this.formBuilder.group({

      email: ['chunkylover53@aol.com', Validators.compose([Validators.pattern(regexValidators.email), Validators.required])],
      password: ['NoM@reSecrets1', Validators.compose([Validators.pattern(regexValidators.password), Validators.required])]

      /*

      email: ['', Validators.required],
      password: ['', Validators.required]

      */

    });
  }

  onSignIn() {

    this.submitted = true;

    this.logger.info('SignInPage: onSignIn()');
    this.logger.info('Email: ' + this.form.controls['email'].value);
    this.logger.info('Password: ' + this.form.controls['password'].value);

    if (this.form.valid) {
      this.navCtrl.push(TabsPage);
    }
  }

  onForgotPassword() {
    this.logger.info('SignInPage: onForgotPassword()');
  }
}

/*

 if (this.form.dirty && this.form.valid) {

  email: AbstractControl;

*/
