import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

   registerpage() {
     this.navCtrl.push(RegisterPage);
   }
}
