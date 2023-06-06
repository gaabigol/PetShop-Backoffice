import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule, MenuController } from '@ionic/angular';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderStatusBagdeComponent } from './order-status-bagde/order-status-bagde.component';



@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
    OrderStatusBagdeComponent,
  ],
  imports: [
    CommonModule, 
    IonicModule,
  ],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
    OrderStatusBagdeComponent,
    
  ]
})
export class ComponentsModule { }
