import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardService } from './shared.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  barData:any[]=[];
  pieData:any[]=[];
  donutData:any[]=[];
  lineData:any[]=[];
  getQuickData:any;
  allDoctors:any;

  constructor(private DashboardService:DashboardService) { }
  
 

  ngOnInit() {

    /* Subscribed Pie Data */
    this.DashboardService.getQuickReport().subscribe((data:any)=>{
      console.log(data);
      this.getQuickData = data;
    });
   
    /* Subscribed Bar Data */
    this.DashboardService.getBarChart().subscribe((data : any[])=>{
      console.log(data);
      this.barChartLabels = data;
    });

    /* Subscribed Pie Data */
    this.DashboardService.getPieChart().subscribe((data : any[])=>{
        console.log(data);
        this.pieChartData = data;
    });

    /* Subscribed Bar Data */
    this.DashboardService.getDonutChart().subscribe((data : any[])=>{
      console.log(data);
      this.doughnutChartData = data;
    });

    /* Subscribed Pie Data */
    this.DashboardService.getLineChart().subscribe((data : any[])=>{
        console.log(data);
        this.lineChartData[0].data = data;
    });

    

}

  

  // Bar Chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    
  };
  public barChartLabels = [];
  //this.barData=[];
  public barChartType = 'bar';
  public barChartLegend = true;
   
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Quality of Service'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Service Recommendations'}
  ];
   

  // doughnut Chart
  public doughnutChartLabels = ['ODP Earnings', 'IDP Earnings'];
  public doughnutChartData = [120, 150];
  public doughnutChartType = 'doughnut';

  // Pie Chart
  public pieChartLabels = ['Existing Patient', 'New Patient', 'Old Patient', ];
  public pieChartData = [120, 150, 180];
  public pieChartType = 'pie';

  // Line Chart
 public lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pharmacy Orders' },
];
public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

public lineChartColors: Color[] = [
  {
    borderColor: 'green',
    backgroundColor: 'transparent',
  }
  
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];

}
