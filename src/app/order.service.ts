import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Item } from './Item';
import { Order } from './Order';
import { Router } from '@angular/router';
import { ItemOrder } from './ItemOrder';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { DBOrder } from './dbOrderEntry';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private router:Router, private userServices:UserService, private http:HttpClient) {
    this.orderQnt = [0,0,0,0,0,0,0,0];
    this.order= new Order( "-1", [], -1);
    this.cid = userServices.currentuser.userid;
  }

  cid : string = "-1";
  orderQnt: number[];
  basedUrl: string = "http://localhost:3000/order";
  items : Item[] = [
    new Item(1,"Product 1",50),
    new Item(2,"Product 2",10),
    new Item(3,"Product 3",20),
    new Item(4,"Product 4",30),
    new Item(5,"Product 5",40),
    new Item(6,"Product 6",60),
    new Item(7,"Product 7",70),
    new Item(8,"Product 8",80)
  ];
  order:Order;

  setQtn(qtn: number[]):void{
    this.orderQnt = qtn;
  }

  processOrder(order: Order) {
    this.order = order;
  }

  postOrder(order: ItemOrder){

    console.log(new DBOrder(order.cid,order.item.name,order.qnt));
    return this.http.post(this.basedUrl,new DBOrder(order.cid,order.item.name,order.qnt));
  }
}
