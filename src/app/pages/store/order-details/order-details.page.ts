import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetais } from 'src/app/models/orderdetails.model';
import { DataService } from 'src/app/services/data.service';
import { SecurityUtil } from 'src/app/utils/security';
import { StatusUtil } from 'src/app/utils/status.util';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public order: OrderDetais;

  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit() {
    let number = this.route.snapshot.paramMap.get('number');
    this.service.getOrder(number).subscribe((data: OrderDetais) => {
      this.order = data;
    });
  }

  translateOrderStatus(status: string): string {
    return StatusUtil.convert(status);
  }

  isManager(): boolean {
    return SecurityUtil.isInRole('manager');
  }
}
