import { Component, OnInit } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoggerService } from '../../services/log4ts/logger.service';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage implements OnInit {

  formGroup: FormGroup;
  email: AbstractControl;

  // component = VerificationOptionsPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private logger: LoggerService) {

    this.logger.info('SignInPage initialised');

    this.formGroup = this.formBuilder.group({
      email: ['chunkylover53@aol.com', Validators.required],
      password: ['Marge', Validators.required]

      /*

      email: ['', Validators.required],
      password: ['', Validators.required]

      email: ['edmund.barton@barton.org', Validators.required],
      password: ['NoMoreSecrets', Validators.required]

      */

    });

    this.email = this.formGroup.controls['email'];

    /*

    this.email.valueChanges.subscribe( (value: string) => {
        this.logger.info('Email changed to: ', value);
      }
    );

    this.formGroup.valueChanges.subscribe( (form: any) => {
        this.logger.info('Form changed to: ', form);
      }
    );

    */
  }

  ngOnInit() {
    this.logger.info('SignInPage: ngOnInit()');
  }

  ionViewDidLoad() {
    this.logger.info('SignInPage: ionViewDidLoad()');
  }

  previousPage() {
    this.logger.info('SignInPage: previousPage()');
    this.navCtrl.pop();
  }

  nextPage() {

    this.logger.info('SignInPage: nextPage()');

    this.logger.info('SignInPage - Email: ' + this.formGroup.controls['email'].value);
    this.logger.info('SignInPage - Password: ' + this.formGroup.controls['password'].value);
    // this.navCtrl.push(this.component);
    this.navCtrl.pop();
  }
}
