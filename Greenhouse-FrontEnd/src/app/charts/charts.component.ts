import { Component, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  NgApexchartsModule,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges {
  @ViewChild("chart") chart: ChartComponent | undefined;
  @Input() series: number | any; // Dinamik veri girişi için @Input ekleniyor
  @Input() label: string | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = this.getChartOptions(0); // Başlangıçta bir değer atanıyor
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['series']) {
      this.chartOptions = this.getChartOptions(this.series); // Series değeri değiştiğinde grafiği güncelle
    }
  }

  getChartOptions(seriesValue: number): Partial<ChartOptions> {
    return {
      series: [seriesValue],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function() {
                return seriesValue.toString(); // Series değerini kullanarak yüzdelik gösterim yap
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: [this.label]
    };
  }
}
