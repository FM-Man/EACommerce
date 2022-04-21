import { Console } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemOrder } from '../ItemOrder';
import { Order } from '../Order';
import { OrderService } from '../order.service';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qnts : number[] =[0,0,0,0,0,0,0,0];
  itemArray : ItemOrder[] = [];
  cid : string = "";
  total : number = 0;
  items : Item[];
  cart : number = 0;

  constructor(private orderManager: OrderService, private router:Router, private userService:UserService){
    this.items=orderManager.items;
  }

  ngOnInit(): void {
  }

  onPlus(index:number):void{
    if(this.qnts[index]===0)
      this.cart++;
    this.qnts[index]++;
  }

  onMinus(index:number):void{
    this.qnts[index]--;
    if(this.qnts[index]===0)
      this.cart--;
  }

  getQnts() : number[] {
    return this.qnts;
  }

  proceedToPay():void{
    this.cid = this.orderManager.cid;
    for(let i=0; i<this.qnts.length; i++){
      if(this.qnts[i]>0){
        this.itemArray.push(new ItemOrder(this.cid,this.items[i] , this.qnts[i]));
        this.total += this.items[i].price*this.qnts[i];
      }
    }
    this.orderManager.processOrder(new Order(this.cid,this.itemArray,this.total));
    this.router.navigate(['order']);
  }

  logOut():void{
    this.userService.currentuser = new User;
    this.router.navigate(['login']);
  }
}
