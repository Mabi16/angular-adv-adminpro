import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
    @Input() title:string = "Sin titulo";

  @Input() labels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() data:number[]=[10,10,10];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data:this.data},
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';
}
