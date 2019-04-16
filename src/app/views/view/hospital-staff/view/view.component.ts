import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hospital-staff-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class HospitalViewComponent implements OnInit {

  constructor() { }
  public paging:any =  ['10','20','30','40','50'];
  ngOnInit() {
  }

}
