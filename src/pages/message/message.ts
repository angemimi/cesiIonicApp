import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';


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

  load() {
  	let headers = new Headers();
  	headers.append('token', this.token);
    this.http.get('http://cesi.cleverapps.io/messages',{headers: headers}).subscribe(res => {
    	this.messages = res.json();
    }, (err) => {
    	alert(err);
    });
  }

  postMessage() {
  	let headers = new Headers();
  	headers.append('token', this.token);
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  	let body = 'message='+this.msg;
  	this.http.post('http://cesi.cleverapps.io/messages', body, {headers: headers}).subscribe(res => {
  		this.msg = '';
  		this.load();
  	}, (err) => {
  		alert(err);
  	});
  }

  doRefresh(refresher) {
    this.load();
    setTimeout(() => {
      refresher.complete();
    }, 200);
  }

}
