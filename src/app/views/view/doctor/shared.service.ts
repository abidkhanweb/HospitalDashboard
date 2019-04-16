import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService implements OnInit {

  url:string = 'api/';
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    
  }

  getDoctors(){
    return this.http.get(this.url+'doctorsData');
  }
}
