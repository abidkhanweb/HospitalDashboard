import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doctor-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})



export class DoctorActionComponent implements OnInit {

  
  public genders:any =  ['Male','Female'];

  submitForm(values:any){
    console.log(values);
  }

  constructor() { }

  ngOnInit() {

  }

}
