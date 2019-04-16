import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appointment-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class AppointmentActionComponent implements OnInit {

  constructor() { }
  public genders:any =  ['Male','Female'];
  public services:any =  ['Dental Checkup','Full Body Checkup','ENT Checkup','Heart Checkup'];
  ngOnInit() {
  }

}
