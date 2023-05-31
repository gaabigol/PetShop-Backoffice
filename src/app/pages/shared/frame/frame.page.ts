import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private navCrtl: NavController
  ) {}

  ngOnInit() {}

  goToPage(page: string): void {
    this.menuCtrl.close();
    this.navCrtl.navigateRoot(page);
  }
}
