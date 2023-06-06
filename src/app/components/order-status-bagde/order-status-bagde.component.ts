import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status-bagde',
  templateUrl: './order-status-bagde.component.html',
  styleUrls: ['./order-status-bagde.component.scss'],
})
export class OrderStatusBagdeComponent implements OnInit {
  @Input() status = 'confirmed';

  constructor() {}

  ngOnInit() {}
}
