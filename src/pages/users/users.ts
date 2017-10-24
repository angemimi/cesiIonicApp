import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
	token: any;
	users: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.token = localStorage.token;
  	this.load();
  }

  getHeader() {
  	let headers = new Headers();
  	headers.append('token', localStorage.token);

  	return headers;
  }

  load(){
  	this.http.get('http://cesi.cleverapps.io/users', {headers: this.getHeader()}).subscribe( res => {
  		this.users = res.json();
  	}, (err) => {
  		this.signout();
  	});
  }

  doRefresh(refresher){
  	this.load();
    setTimeout(() => {
      refresher.complete();
    }, 200);
  }

  signout(){
    localStorage.clear();
    this.navCtrl.setRoot(HomePage);
  }

}
