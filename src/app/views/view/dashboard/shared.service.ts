import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit {

  private url: string = "api/";

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    
  }

  public getQuickReport() {
    return this.http.get(this.url + 'quickReport');
  }

  public getBarChart() {
    return this.http.get(this.url + 'barChartData');
  }

  public getPieChart() {
    return this.http.get(this.url + 'pieChartData');
  }

  public getDonutChart() {
    return this.http.get(this.url + 'barDonutData');
  }

  public getLineChart() {
    return this.http.get(this.url + 'pieLineData');
  }

  

}







