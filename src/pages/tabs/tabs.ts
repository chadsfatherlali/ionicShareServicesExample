import { Component } from '@angular/core';
import { ShareData } from '../../providers/shareData'

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ContactPage;

  constructor(shareData: ShareData) {
  	console.log('= email Tabs: ', shareData.test)
  }
}