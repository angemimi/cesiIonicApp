import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Headers, Http} from '@angular/http';

import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	username: String;
	pwd: String;
	urlPhoto: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
  	let body = 'username='+this.username+'&pwd='+this.pwd+'&urlPhoto='+this.urlPhoto;
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  	this.http.post('http://cesi.cleverapps.io/signup', body, {headers: headers})
  	.subscribe(res =>{
  		let toast = this.toastCtrl.create({
  			message: 'Create account. Let\'s connect',
  			duration: 3000,
	      position: 'top',
	      dismissOnPageChange: true
  		});

  		setTimeout(() => {
  			this.navCtrl.setRoot(HomePage);
  		}, 3000);

  		toast.present();
  	}, (err) => {
  		console.log(err);
      let toast = this.toastCtrl.create({
  			message: 'Authentication error',
  			duration: 3000,
	      position: 'top',
	      dismissOnPageChange: true
  		});

  		toast.present();
  	});
  }

}
