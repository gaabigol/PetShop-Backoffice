import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { OrderDetais } from '../models/orderdetails.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'http://localhost:3000/v1';

  constructor(private http: HttpClient) {}

  public authenticate(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }

  public getMonthlySalesChartData() {
    return this.http.get(`${this.url}/reports/ms`);
  }

  public getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}/orders`);
  }

  public getOrder(order: any): any{
    return this.http.get(`${this.url}/orders/${order}`);
  }
}
