import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';



// Component
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AppointmentActionComponent } from './view/appointment/action/action.component';
import { AppointmentViewComponent } from './view/appointment/view/view.component';
import { BillingActionComponent } from './view/billing/action/action.component';
import { BillingViewComponent } from './view/billing/view/view.component';
import { DoctorActionComponent } from './view/doctor/action/action.component';
import { DoctorViewComponent } from './view/doctor/view/view.component';
import { EventActionComponent } from './view/event-management/action/action.component';
import { EventViewComponent } from './view/event-management/view/view.component';
import { HospitalActionComponent } from './view/hospital-staff/action/action.component';
import { HospitalViewComponent } from './view/hospital-staff/view/view.component';
import { MailBoxActionComponent } from './view/mailbox/action/action.component';
import { MailBoxViewComponent } from './view/mailbox/view/view.component';
import { PatientActionComponent } from './view/patient/action/action.component';
import { PatientViewComponent } from './view/patient/view/view.component';
import { ReportActionComponent } from './view/report/action/action.component';
import { ReportViewComponent } from './view/report/view/view.component';
import { MaterialModule } from './material.module';
import { DoctorProfileComponent } from './view/doctor/profile/profile.component';
import { PatientProfileComponent } from './view/patient/profile/profile.component';


// Service
import { DashboardService } from './view/dashboard/shared.service';


@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentActionComponent,
    AppointmentViewComponent,
    BillingActionComponent,
    BillingViewComponent,
    DoctorActionComponent,
    DoctorViewComponent,
    EventActionComponent,
    EventViewComponent,
    HospitalActionComponent,
    HospitalViewComponent,
    MailBoxActionComponent,
    MailBoxViewComponent,
    PatientActionComponent,
    PatientViewComponent,
    ReportActionComponent,
    ReportViewComponent,
    DoctorProfileComponent,
    PatientProfileComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    ChartsModule,
    
  ],
  exports:[
    DashboardComponent,
    AppointmentActionComponent,
    AppointmentViewComponent,
    BillingActionComponent,
    BillingViewComponent,
    DoctorActionComponent,
    DoctorViewComponent,
    EventActionComponent,
    EventViewComponent,
    HospitalActionComponent,
    HospitalViewComponent,
    MailBoxActionComponent,
    MailBoxViewComponent,
    PatientActionComponent,
    PatientViewComponent,
    ReportActionComponent,
    ReportViewComponent,
    DoctorProfileComponent
  ],
  providers: [
    
  ],
})

export class ViewsModule{

}