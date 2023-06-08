import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Order } from 'src/app/models/order.model';
import { OrderDetais } from 'src/app/models/orderdetails.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  public orders: Order[];

  constructor(private navCrtl: NavController, private service: DataService) {}

  ngOnInit() {
    this.service.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToOrder(order: Order): void {
    this.navCrtl.navigateRoot(`/orders/${order.number}`);
  }
}
