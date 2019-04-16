import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hospital-staff-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class HospitalActionComponent implements OnInit {

  constructor() { }
  public genders:any =  ['Male','Female'];
  public services:any =  ['Dental Checkup','Full Body Checkup','ENT Checkup','Heart Checkup'];
  ngOnInit() {
  }

}
