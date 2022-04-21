
export class DBOrder{
  customer: string;
  itemname : string;
  quantity  : number;

  constructor(cid:string, i:string, q:number){
    this.customer=cid;
    this.itemname = i;
    this.quantity = q;
  }
}
