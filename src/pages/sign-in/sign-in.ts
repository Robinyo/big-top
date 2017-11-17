import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoggerService } from '../../services/log4ts/logger.service';

// The Angular email validator accepts an email like "rob@example", perhaps because "rob@localhost" could be valid.
// The pureEmail regex does not accept "ryan@example" as a valid email address, which I think is a good thing.
// See: EMAIL_REGEXP from https://github.com/angular/angular.js/blob/ffb6b2fb56d9ffcb051284965dd538629ea9687a/src/ng/directive/input.js#L16
const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  form: FormGroup;
  email: AbstractControl;

  submitted: boolean = false;

  // component = EventsPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private logger: LoggerService) {

    this.logger.info('SignInPage initialised');

    this.form = this.formBuilder.group({

      email: ['chunkylover53@aol.com', Validators.compose([Validators.pattern(PURE_EMAIL_REGEXP), Validators.required])],
      password: ['NoM@reSecrets1', Validators.compose([Validators.pattern(PASSWORD_REGEXP), Validators.required])]

      /*

      email: ['chunkylover53@aol.com', Validators.required],
      password: ['NoM@reSecrets1', Validators.required]

      */

    });
  }

  signIn() {

    this.logger.info('SignInPage: signIn()');

    this.submitted = true;

    this.logger.info('SignInPage - Email: ' + this.form.controls['email'].value);
    this.logger.info('SignInPage - Password: ' + this.form.controls['password'].value);

    if (this.form.valid) {  // if (this.form.dirty && this.form.valid) {
      this.navCtrl.pop();
    }
  }
}

/*

  this.navCtrl.push(this.component);

*/
