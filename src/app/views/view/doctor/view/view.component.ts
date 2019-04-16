import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared.service';

@Component({
  selector: 'doctor-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class DoctorViewComponent implements OnInit {

  allDoctors:any=[];
  constructor(private DoctorService:DoctorService){

  }

  ngOnInit() {
    this.DoctorService.getDoctors().subscribe((response:any)=>{
      this.allDoctors = response;  
    });
  }

}
