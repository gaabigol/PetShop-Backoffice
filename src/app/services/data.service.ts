import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'http://localhost:7188';

  constructor(private http: HttpClient) {}

  public authenticate(data: any) {
    return this.http.post(`${this.url}/v1/login`, data);
  }

  public getMonthlySalesChartData() {
    return this.http.get(`${this.url}/v1/reports/ms`);
  }
  public getOrders() {
    return this.http.get(`${this.url}/v1/orders`);
  }

  public getOrder(order: string) {
    return this.http.get(`${this.url}/v1/orders/#{order}`);
  }
}
