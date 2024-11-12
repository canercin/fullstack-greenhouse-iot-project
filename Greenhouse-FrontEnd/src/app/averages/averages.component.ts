import {Component, OnInit, ViewChild} from '@angular/core';
import {AveragechartComponent} from "../averagechart/averagechart.component";
import {FormsModule} from "@angular/forms";
import {GreenhouseDailyAverageDTO} from "../models/GreenhouseDailyAverageDTO";
import {GreenhouseWeeklyAverageDTO} from "../models/GreenhouseWeeklyAverageDTO";
import {GreenhouseMonthlyAverageDTO} from "../models/GreenhouseMonthlyAverageDTO";
import {GreenhouseService} from "../service/greenhouse.service";
import {NgIf} from "@angular/common";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-averages',
  standalone: true,
  imports: [
    AveragechartComponent,
    FormsModule,
    NgIf,
    SidebarComponent
  ],
  templateUrl: './averages.component.html',
  styleUrl: './averages.component.css'
})
export class AveragesComponent{
  dailyDate: string = '';
  weeklyDate: string = '';
  monthlyDate: string = '';
  dailyAverages: number[] = [];
  weeklyAverages: number[] = [];
  monthlyAverages: number[] = [];
  averagesLabels: string[] = ["Ortalama Nem", "Ortalama Işık", "Ortalama Toprak Nemi", "Ortalama Sıcaklık", "Ortalama Su Seviyesi"];

  @ViewChild('dailyChart') dailyChart!: AveragechartComponent;
  @ViewChild('weeklyChart') weeklyChart!: AveragechartComponent;
  @ViewChild('monthlyChart') monthlyChart!: AveragechartComponent;

  constructor(private greenhouseService: GreenhouseService) {}

  ngAfterViewInit(): void {
    this.updateCharts();
  }

  fetchDailyAverages(): void {
    if (this.dailyDate) {
      this.greenhouseService.getDailyAverages(this.dailyDate).subscribe(
        (response: GreenhouseDailyAverageDTO[]) => {
          this.dailyAverages = this.mapToAverageValues(response);
          console.log('Daily averages fetched:', this.dailyAverages);
          this.updateCharts();
        },
        (error) => {
          console.error('Error fetching daily averages:', error);
        }
      );
    }
  }

  fetchWeeklyAverages(): void {
    if (this.weeklyDate) {
      this.greenhouseService.getWeeklyAverages(this.weeklyDate).subscribe(
        (response: GreenhouseWeeklyAverageDTO[]) => {
          this.weeklyAverages = this.mapToAverageValues(response);
          console.log('Weekly averages fetched:', this.weeklyAverages);
          this.updateCharts();
        },
        (error) => {
          console.error('Error fetching weekly averages:', error);
        }
      );
    }
  }

  fetchMonthlyAverages(): void {
    if (this.monthlyDate) {
      const year = this.monthlyDate.split('-')[0];
      const month = this.monthlyDate.split('-')[1];
      this.greenhouseService.getMonthlyAverages(year, month).subscribe(
        (response: GreenhouseMonthlyAverageDTO[]) => {
          this.monthlyAverages = this.mapToAverageValues(response);
          console.log('Monthly averages fetched:', this.monthlyAverages);
          this.updateCharts();
        },
        (error) => {
          console.error('Error fetching monthly averages:', error);
        }
      );
    }
  }

  private updateCharts(): void {
    this.dailyChart.series = [...this.dailyAverages];
    this.weeklyChart.series = [...this.weeklyAverages];
    this.monthlyChart.series = [...this.monthlyAverages];
  }

  private mapToAverageValues(data: any[]): number[] {
    const averages: number[] = [];
    data.forEach(item => {
      averages.push(
        item.avgHumidity,
        item.avgLight,
        item.avgSoilMoisture,
        item.avgTemperatureAsc,
        item.avgWaterLevel
      );
    });
    return averages;
  }
}
