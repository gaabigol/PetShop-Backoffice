import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  public getOrders() {
    return this.http.get(`${this.url}/orders`);
  }

  public getOrder(order: string) {
    return this.http.get(`${this.url}/orders/#{order}`);
  }
}
