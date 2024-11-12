export class GreenhouseMonthlyAverageDTO {
  yearMonth: string;
  avgHumidity: number;
  avgLight: number;
  avgSoilMoisture: number;
  avgTemperatureAsc: number;
  avgTemperatureAsf: number;
  avgWaterLevel: number;

  constructor(yearMonth: string, avgHumidity: number, avgLight: number, avgSoilMoisture: number, avgTemperatureAsc: number, avgTemperatureAsf: number, avgWaterLevel: number) {
    this.yearMonth = yearMonth;
    this.avgHumidity = avgHumidity;
    this.avgLight = avgLight;
    this.avgSoilMoisture = avgSoilMoisture;
    this.avgTemperatureAsc = avgTemperatureAsc;
    this.avgTemperatureAsf = avgTemperatureAsf;
    this.avgWaterLevel = avgWaterLevel;
  }
}
