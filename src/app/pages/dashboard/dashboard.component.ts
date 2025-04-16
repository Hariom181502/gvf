import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../charts/chart/chart.component';
import { ChartService } from '../../services/chart.service';
import { alertsDtl, generatorDtl } from './jsonData';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  
  checksLogsDoughnutChartData:any;
  energyUtilityBarChartData:any;
  waterUtilityBarChartData:any;
  generatorDtl:any;
  alertsDtl:any;

  constructor(private chartService: ChartService) { }
  
  ngOnInit(): void {
    this.setValues();
  }

  setValues(){
    this.chartService.getChartsData().subscribe((res:any) => {
      this.checksLogsDoughnutChartData = res?.checksLogsDoughnutChartData;
      this.energyUtilityBarChartData = res?.energyUtilityBarChartData;
      this.waterUtilityBarChartData = res?.waterUtilityBarChartData;
    });

    this.generatorDtl = generatorDtl;
    this.alertsDtl = alertsDtl;
  }

}
