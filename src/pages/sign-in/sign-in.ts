import { Component, OnInit, ViewChild } from '@angular/core';

import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsPage } from '@pages/tabs/tabs';
import { regexValidators } from '@pages/validators/validator';

import { LoggerService } from '@services/log4ts/logger.service';

import { slideInLeft } from '@pages/animations/sliding-entrances/slide-in-left.animation';
import { slideInUpWithDelay } from '@pages/animations/sliding-entrances/slide-in-up-with-delay.animation';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: './sign-in.html',
  animations: [ slideInLeft, slideInUpWithDelay ]
})
export class SignInPage implements OnInit {

  @ViewChild(Content) private content: Content;

  public credentialsForm: FormGroup;

  public submitted: boolean = false;

  private component: any = TabsPage;

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

  public ngOnInit() {

    this.logger.info('SignInPage: ngOnInit()');

    this.setDisableScroll(true);
  }

  /**
   * @param {boolean} disable  Show/Hide the vertical scrollbar
   *
   * @example
   * this.setDisableScroll(true);
   *
   * @returns {void}
   */
  private setDisableScroll(disable: boolean) : void {

    let scroll = this.content.getScrollElement();
    scroll.style.overflowY = disable ? 'hidden' : 'scroll';
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
      this.navCtrl.push(this.component);
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
