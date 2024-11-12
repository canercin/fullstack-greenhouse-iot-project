import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent, NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};

@Component({
  selector: 'app-averagechart',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './averagechart.component.html',
  styleUrl: './averagechart.component.css'
})
export class AveragechartComponent implements OnChanges {
  @Input() series: number[] = [];
  @Input() seriesLabels: string[] = [];

  public chartOptions: Partial<ChartOptions> | any = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['series'] && changes['series'].currentValue) {
      this.chartOptions = {
        series: this.series,
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 200,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#00D4F9'],
        labels: this.seriesLabels,
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'top',
          offsetX: 50,
          offsetY: 10,
          labels: {
            useSeriesColors: true,
          },
          formatter: function (value: string, opts: any) {
            return opts.w.globals.labels[opts.seriesIndex] + ": " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            horizontal: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      };
    }
  }
}
