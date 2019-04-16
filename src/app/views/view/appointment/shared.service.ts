import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService implements OnInit {
  url:string = 'api/';
  constructor(private http:HttpClient){

  }
  ngOnInit(){

  }

  getAppointments(){
    return this.http.get(this.url+'appointmentData');
  }

}
