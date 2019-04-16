import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements OnInit {
  url:string = 'api/';
  constructor(private http:HttpClient) { 

  }
  ngOnInit(){
    
  }

  getPatients(){
    return this.http.get(this.url+'patientsData');
  }

}
