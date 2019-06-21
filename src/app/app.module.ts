import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Custom Module and Service
import { ViewsModule } from './views/views.module';
import {MaterialModule} from './views/material.module';


import { AppComponent } from './app.component';

import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ViewComponent } from './views/view/view.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './views/in-memory-data.service';

import { DashboardService } from './views/view/dashboard/shared.service';
import { DoctorService } from './views/view/doctor/shared.service';
import { PatientService } from './views/view/patient/shared.service';
import { AppointmentService } from './views/view/appointment/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ViewsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
    
    
  ],

  
  providers: [DashboardService,DoctorService,PatientService,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
