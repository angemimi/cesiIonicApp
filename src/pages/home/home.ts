import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	username: String;
	pwd: String;

  constructor(public navCtrl: NavController, public http: Http, public toastCtrl: ToastController) {

  }

  doSubmit(){
  	localStorage.setItem('token', '123456789');
  	this.navCtrl.setRoot(SignupPage);
  }

  doLogin(){
  	let body = 'username='+this.username+'&pwd='+this.pwd;

  	let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  	this.http.post('http://cesi.cleverapps.io/signin',body, {headers:headers}).subscribe( res => {
  		this.navCtrl.push(TabsPage, {
        token: res.json().token 
      });
  	}, (err) => {
  		let toast = this.toastCtrl.create({
  			message: 'Authentication error',
  			duration: 3000,
	      position: 'top',
	      dismissOnPageChange: true
  		});

  		toast.present();
  	})
  }

}
