import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
