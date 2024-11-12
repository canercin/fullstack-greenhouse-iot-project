import {Component, OnInit} from '@angular/core';
import {ChartsComponent} from "../charts/charts.component";
import { CommonModule } from '@angular/common';
import {GreenhouseService} from "../service/greenhouse.service";

@Component({
  selector: 'app-chartsbox',
  standalone: true,
  imports: [
    ChartsComponent, CommonModule
  ],
  templateUrl: './chartsbox.component.html',
  styleUrl: './chartsbox.component.css'
})
export class ChartsboxComponent implements OnInit {
  seriesValues: number[] = [];
  seriesLabels: string[] = ["Işık Miktarı (%)", "Sıcaklık (°C)", "Nem (%)", "Su Seviyesi (%)", "Toprak Nem Derecesi (%)"];

  constructor(private greenhouseService: GreenhouseService) { }

  ngOnInit(): void {
    this.greenhouseService.getLastData().subscribe(data => {
      this.seriesValues = [data.lightAmount, data.temperatureAsC, data.humidity, data.waterLevel, data.soilMoisture];
    });
  }
}
