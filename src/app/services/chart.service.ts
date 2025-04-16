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
    
    const energyUtilityBarChartData = {
      type: 'bar',
      responsive: true,

      data: {
        labels: ['DR Arrear', 'CA', 'LTA Arrear', '-'],
        datasets: [
          {
            label: " ",
            data: [62, 84, 58, 82],
            backgroundColor: ['#9FD9BD', '#9FD9BD', '#9FD9BD', '#9FD9BD'],
            barThickness: 20,
            borderRadius: 5,
          }
        ]
      },
      options: {
        aspectRatio: 2.8,
        layout: {
          padding: {
            top: 20,
            bottom: 20
          },
        },
        plugins: {
          legend: false,
        },
        scales: {
          y: {
            // type: 'category',
            min: 20,
            max: 100,
            ticks: {
              stepSize: 20,
              callback: function (value: any) {
                return value + 'k';
              }
            },
            border: {
              display: false,
            },
            grid: {
              color: '#EDEDED6A'
            },
          },
          x: {
            // type: 'category',
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              font: {
                size: 7
              },
            }
          },

        },
      }
    }
   

    
    const responseData = {
      checksLogsDoughnutChartData: checksLogsDoughnutChartData,
      energyUtilityBarChartData: energyUtilityBarChartData,
    }
    return of(responseData)
  }
}

