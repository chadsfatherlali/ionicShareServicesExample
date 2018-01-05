import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShareData } from '../../providers/shareData'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, shareData: ShareData) {
  	console.log('= email Home: ', shareData.test)
  }
}
