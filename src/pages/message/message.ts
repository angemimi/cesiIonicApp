import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
	
	token: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.token = navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  displayToken(){
  	alert(this.token);
  }

}
