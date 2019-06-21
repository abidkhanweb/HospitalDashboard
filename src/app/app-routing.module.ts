import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { DashboardComponent } from './views/view/dashboard/dashboard.component';
import { PatientViewComponent } from './views/view/patient/view/view.component';
import { PatientActionComponent } from './views/view/patient/action/action.component';
import { PatientProfileComponent } from './views/view/patient/profile/profile.component';
import { ReportViewComponent } from './views/view/report/view/view.component';
import { BillingViewComponent } from './views/view/billing/view/view.component';
import { BillingActionComponent } from './views/view/billing/action/action.component';
import { MailBoxViewComponent } from './views/view/mailbox/view/view.component';
import { EventViewComponent } from './views/view/event-management/view/view.component';
import { HospitalViewComponent } from './views/view/hospital-staff/view/view.component';
import { HospitalActionComponent } from './views/view/hospital-staff/action/action.component';
import { DoctorViewComponent } from './views/view/doctor/view/view.component';
import { AppointmentViewComponent } from './views/view/appointment/view/view.component';
import { AppointmentActionComponent } from './views/view/appointment/action/action.component';
import { DoctorActionComponent } from './views/view/doctor/action/action.component';
import { DoctorProfileComponent } from './views/view/doctor/profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'doctors', component:DoctorViewComponent},
  {path:'doctor-action', component:DoctorActionComponent},
  {path:'doctor-profile', component:DoctorProfileComponent},
  {path:'patients', component:PatientViewComponent},
  {path:'patient-action', component:PatientActionComponent},
  {path:'patient-profile', component:PatientProfileComponent},
  {path:'appointment', component:AppointmentViewComponent},
  {path:'appointment-list', component:AppointmentActionComponent},
  {path:'appointment-action', component:AppointmentActionComponent},
  {path:'reports', component:ReportViewComponent},
  {path:'billing', component:BillingViewComponent},
  {path:'billing-action', component:BillingActionComponent},
  {path:'mailbox', component:MailBoxViewComponent},
  {path:'hospital-staff', component:HospitalViewComponent},
  {path:'hospital-staff-action', component:HospitalActionComponent},
  {path:'event-management', component:EventViewComponent},
  
  
];

@NgModule({
  imports: [ViewsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
