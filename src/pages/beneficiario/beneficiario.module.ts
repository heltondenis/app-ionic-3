import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeneficiarioPage } from './beneficiario';

@NgModule({
  declarations: [
    BeneficiarioPage,
  ],
  imports: [
    IonicPageModule.forChild(BeneficiarioPage),
  ],
})
export class BeneficiarioPageModule {}
