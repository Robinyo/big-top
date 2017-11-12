import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionPage } from './introduction';

@NgModule({
  declarations: [
    IntroductionPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroductionPage),
  ],
})
export class IntroductionPageModule {}
