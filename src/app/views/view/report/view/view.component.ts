import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'report-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ReportViewComponent implements OnInit {

  constructor() { }

   // Line Chart
     // Line Chart
 public lineChartData: ChartDataSets[] = [
    { data: [65, 549, 850, 81, 560, 555, 450], label: 'Pharmacy Orders' },
    { data: [550, 680, 810, 120, 782, 650, 422], label: 'Operation Income' },
    { data: [438, 450, 220, 982, 452, 800, 400], label: 'Total Visitors' },
    
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  

  public lineChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'transparent',
    },
    {
      borderColor: 'orangered',
      backgroundColor: 'transparent',
    },
    {
      borderColor: 'skyblue',
      backgroundColor: 'transparent',
    }
    
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  ngOnInit() {
  }

}
