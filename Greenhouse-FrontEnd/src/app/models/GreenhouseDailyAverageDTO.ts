export class GreenhouseDailyAverageDTO{
  date: string;
  avgHumidity: number;
  avgLight: number;
  avgSoilMoisture: number;
  avgTemperatureAsc: number;
  avgTemperatureAsf: number;
  avgWaterLevel: number;

  constructor(date: string, avgHumidity: number, avgLight: number, avgSoilMoisture: number, avgTemperatureAsc: number, avgTemperatureAsf: number, avgWaterLevel: number) {
    this.date = date;
    this.avgHumidity = avgHumidity;
    this.avgLight = avgLight;
    this.avgSoilMoisture = avgSoilMoisture;
    this.avgTemperatureAsc = avgTemperatureAsc;
    this.avgTemperatureAsf = avgTemperatureAsf;
    this.avgWaterLevel = avgWaterLevel;
  }
}
