import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MessagePage } from '../message/message';
import { UsersPage } from '../users/users'


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1Root = MessagePage;
	tab2Root = UsersPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	localStorage.setItem('token', navParams.get('token'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
