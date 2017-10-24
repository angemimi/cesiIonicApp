import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
	
	token: any;
	messages: any = [];
	msg: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.token = localStorage.getItem('token');
    this.load();
  }

  getHeader() {
    let headers = new Headers();
    headers.append('token', this.token);

    return headers;
  }

  load() {
    this.http.get('http://cesi.cleverapps.io/messages',{headers: this.getHeader()}).subscribe(res => {
    	this.messages = res.json();
    }, (err) => {
    	this.signout();
    });
  }

  postMessage() {
  	let headers: Headers = this.getHeader();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  	let body = 'message='+this.msg;
  	this.http.post('http://cesi.cleverapps.io/messages', body, {headers: headers}).subscribe(res => {
  		this.msg = '';
  		this.load();
  	}, (err) => {
  		this.signout();
  	});
  }

  doRefresh(refresher) {
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
