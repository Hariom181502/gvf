import {ArcElement,BarController,BarElement,CategoryScale,Chart,DoughnutController,Legend,LinearScale,Tooltip} from 'chart.js';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit, AfterViewInit{
 
  @Input() configChart: any;
  @Input() chartClass: any;
  @Input() chartid: any;
  
  public chart: any;

  constructor(){
    Chart.register(ArcElement,Tooltip,Legend,DoughnutController,LinearScale,CategoryScale,BarController,BarElement)
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    setTimeout(() => {
      const canvas = <HTMLCanvasElement>document.getElementById(this.chartid);
      console.log('canvasId:', this.chartid);
      console.log('canvas:', canvas);
      const ctx = canvas.getContext('2d');
      console.log('ctx:', ctx);
      if (ctx) {
        this.chart = new Chart(ctx, this.configChart,);
      } else {
        console.log('error while creating chart ctx');
      }
    }, 500);
  }
  
}
