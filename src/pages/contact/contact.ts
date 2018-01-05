import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShareData } from '../../providers/shareData'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, shareData: ShareData) {
  	console.log('= email Contact: ', shareData.test);
  }
}
