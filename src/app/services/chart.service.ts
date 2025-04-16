import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getChartsData() {

    const checksLogsDoughnutChartData = {
      type: 'doughnut',
      responsive: true,

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
        cutout: '60%',
        aspectRatio: 2.3,
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
          afterLayout(chart: any) {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
      
            if (!chartArea) return;
      
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
        labels: ['Mon', 'Tue', 'Wed', 'Thu','Fri','Sat','Sun'],
        datasets: [
          {
            label: " ",
            data: [15000, 10900, 6000, 15000,18000,10900,14000],
            backgroundColor: ['#9FD9BD'],
            barThickness: 13,
            borderRadius: 1,
          }
        ]
      },
      options: {
        aspectRatio: 2.6,
        layout: {
          padding: {
            top: 35,
            bottom: 35
          },
        },
        plugins: {
          legend: false,
        },
        scales: {
          y: {
            min: 0,
            max: 20000,
            ticks: {
              stepSize: 10000,
              color: '#212121',
              callback: function (value: any) {
                return value === 0 ? value + ' kWh ' : value.toLocaleString();
              }
            },
            border: {
              display: false,
            },
            grid: {
              color: '#0000001a'
            },
          },
          x: {
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              font: {
                size: 14
              },
              color: '#212121',
            }
          },

        },
      }
    }

    const waterUtilityBarChartData = {
      type: 'bar',
      responsive: true,

      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu','Fri','Sat','Sun'],
        datasets: [
          {
            label: " ",
            data: [350, 270, 125, 300,430,270,350],
            backgroundColor: ['#7BC7DB'],
            barThickness: 13,
            borderRadius: 1,
          }
        ]
      },
      options: {
        aspectRatio: 2.6,
        layout: {
          padding: {
            top: 35,
            bottom: 35
          },
        },
        plugins: {
          legend: false,
        },
        scales: {
          y: {
            min: 0,
            max: 500,
            ticks: {
              stepSize: 250,
              color: '#212121',
              callback: function (value: any) {
                return value === 0 ? value + ' KL ' : value;
              }
            },
            border: {
              display: false,
            },
            grid: {
              color: '#0000001a'
            },
          },
          x: {
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              font: {
                size: 14
              },
              color: '#212121',
            }
          },

        },
      }
    }
   
    const responseData = {
      checksLogsDoughnutChartData: checksLogsDoughnutChartData,
      energyUtilityBarChartData: energyUtilityBarChartData,
      waterUtilityBarChartData: waterUtilityBarChartData,
    }
    return of(responseData)
  }
}

