import { Component, OnInit,Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  @Input('title') titulo:string ="";
  @Input('labels')doughnutChartLabels: String[] = ['', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data')doughnutChartData: any = [
    [250, 130, 70],
  ];
  
  public doughnutChartType: ChartType = 'doughnut';

  @Input('color')colors: any[] =[

    {backgroundColor:['#9E120E','#FF5800','#FFB414']}


  ];





}
