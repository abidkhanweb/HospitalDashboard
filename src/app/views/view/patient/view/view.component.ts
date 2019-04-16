import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared.service';

@Component({
  selector: 'patient-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class PatientViewComponent implements OnInit {

  allPatients:any=[];
  constructor(private PatientService:PatientService){

  }

  ngOnInit() {
    this.PatientService.getPatients().subscribe((response:any)=>{
      this.allPatients = response;
    })
  }

}
