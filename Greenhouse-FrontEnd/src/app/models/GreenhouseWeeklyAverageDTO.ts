export class GreenhouseWeeklyAverageDTO {
  year: string;
  week: number;
  avgHumidity: number;
  avgLight: number;
  avgSoilMoisture: number;
  avgTemperatureAsc: number;
  avgTemperatureAsf: number;
  avgWaterLevel: number;

  constructor(year: string, week: number, avgHumidity: number, avgLight: number, avgSoilMoisture: number, avgTemperatureAsc: number, avgTemperatureAsf: number, avgWaterLevel: number) {
    this.year = year;
    this.week = week;
    this.avgHumidity = avgHumidity;
    this.avgLight = avgLight;
    this.avgSoilMoisture = avgSoilMoisture;
    this.avgTemperatureAsc = avgTemperatureAsc;
    this.avgTemperatureAsf = avgTemperatureAsf;
    this.avgWaterLevel = avgWaterLevel;
  }
}
