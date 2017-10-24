import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { MessagePage } from '../message/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	name: String;
	displayName: String;
	pong: String;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  goToMessages() {
  	this.navCtrl.push(MessagePage, {token:'123456789'});
  }

  clickHello() {
  	this.http.get('http://cesi.cleverapps.io/hello?name='+this.name)
  	.subscribe(res => {
  		this.displayName = res.text();
  	}, (err) => {
  		console.log(err);
  		alert('error call HTTP hello '+ err);
  	});
  }

  clickPing() {
  	this.http.post('http://cesi.cleverapps.io/ping',{})
  	.subscribe(res => {
  		this.pong = res.text();
  	}, (err) => {
  		console.log(err);
  		alert('error call HTTP ping '+ err);
  	});
  }

}
