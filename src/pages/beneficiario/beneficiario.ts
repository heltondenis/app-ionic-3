import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-beneficiario',
  templateUrl: 'beneficiario.html',
})
export class BeneficiarioPage {

  public nome_usuario = "Helton Denis";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);

  }

  ionViewDidLoad() {
  // this.somaDoisNumeros(10, 99);
  }

}
