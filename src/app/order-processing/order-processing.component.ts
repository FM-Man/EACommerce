import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-processing',
  templateUrl: './order-processing.component.html',
  styleUrls: ['./order-processing.component.css']
})
export class OrderProcessingComponent implements OnInit {

  constructor(private orderManager:OrderService) {
    this.order = orderManager.order;
  }

  order: Order;

  ngOnInit(): void {
  }

  record():void{
    for(let i=0; i<this.order.items.length;i++){
      this.orderManager.postOrder(this.order.items[i]).subscribe(
        (res:any) => {
          console.log("success");
        }, (err:any) =>{
          console.log("log");
        }

      );
    }
  }


}
