import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'billing-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class BillingActionComponent implements OnInit {

  constructor() { }
  public discounts:any =  ['10%','20%','30%','40%','50%'];
  public paging:any =  ['10','20','30','40','50'];
  ngOnInit() {
  }

}
