import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  		alert(err);
  	});
  }

  doRefresh(refresher){
  	this.load();
    setTimeout(() => {
      refresher.complete();
    }, 200);
  }

}
