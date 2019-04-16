import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'billing-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class BillingViewComponent implements OnInit {

  constructor() { }
  public paging:any =  ['10','20','30','40','50'];
  ngOnInit() {
  }

}
