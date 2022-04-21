import { Item } from "./Item";

export class ItemOrder{
  cid: string;
  item : Item;
  qnt  : number;

  constructor(cid:string, i:Item, q:number){
    this.cid=cid;
    this.item = i;
    this.qnt = q;
  }
}
