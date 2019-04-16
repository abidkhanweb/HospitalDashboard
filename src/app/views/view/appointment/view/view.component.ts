import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared.service';

@Component({
  selector: 'appointment-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class AppointmentViewComponent implements OnInit {
  allAppointment:any;
  constructor(private AppointmentService:AppointmentService){

  }

  ngOnInit() {
    this.AppointmentService.getAppointments().subscribe((response:any)=>{
      this.allAppointment = response;
    })
  }

}
