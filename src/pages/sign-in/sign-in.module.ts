import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPage } from './sign-in';

@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
  ],
})
export class SignInPageModule {}
