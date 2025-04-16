import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  LinearScale,
  LineController,
  Tooltip
} from 'chart.js';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit, AfterViewInit{
 
  public chart: any;
  @Input() configChart: any
  @Input() chartid: any;
  @Input() chartClass: any;
  
  constructor() {
    Chart.register(
      ArcElement,
      Tooltip,
      Legend,
      DoughnutController,
      LinearScale,
      CategoryScale,
      BarController,    // <-- Add this
      BarElement        // <-- And this
    );
  }

  ngOnInit(): void {
    
  }

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
