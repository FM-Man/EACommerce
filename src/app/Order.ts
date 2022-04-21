import { Item } from "./Item";
import { ItemOrder } from "./ItemOrder";

export class Order{
  constructor(cid:string, itemarray:ItemOrder[], tprice:number){
    this.customer_id = cid;
    this.items = itemarray;
    this.price = tprice;
  }
  customer_id:string;
  items : ItemOrder[];
  price : number;
}
