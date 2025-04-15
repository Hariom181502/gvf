import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getChartsData() {

    // ----------------------------------------
    // ------- Doughnut Chart-----------------
    // ----------------------------------------

    const checksLogsDoughnutChartData = {
      type: 'doughnut',
      data: {
        labels: [' ', ' '],
        datasets: [
          {
            label: 'Daily',
            data: [30, 70],
            backgroundColor: [],
            radius: '100%',  
            cutout: '70%'    
          },
          {
            label: 'Hourly',
            data: [8, 92],
            backgroundColor: [],
            radius: '88%', 
            cutout: '65%'
          }
        ]
      },
      options: {
        responsive: true,
        cutout: '60%',
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'start',
            labels: {
              boxWidth: 0
            }
          },
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const label = context.dataset.label || '';
                const value = context.formattedValue;
                return `${label}: ${value}`;
              }
            }
          }
        }
      },
      plugins: [
        {
          id: 'customGradientFills',
          beforeDraw(chart: any) {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
    
            const outerGradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
            outerGradient.addColorStop(0, '#68B2FD');
            outerGradient.addColorStop(1, '#3E6A97');
    
            const innerGradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
            innerGradient.addColorStop(0, '#FEB761');
            innerGradient.addColorStop(1, '#CD770E');
    
            chart.data.datasets[0].backgroundColor = ['#EAEAEA', outerGradient];
            chart.data.datasets[1].backgroundColor = ['#EAEAEA', innerGradient];
          }
        }
      ]
    };
    
    
    const responseData = {
      checksLogsDoughnutChartData: checksLogsDoughnutChartData,
    }
    return of(responseData)
  }
}

