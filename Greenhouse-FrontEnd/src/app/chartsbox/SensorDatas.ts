export class SensorData {
  id: number;
  stateTime: string;
  lightAmount: number;
  temperatureAsC: number;
  temperatureAsF: number;
  humidity: number;
  waterLevel: number;
  soilMoisture: number;
  operationType: number;

  constructor(
    id: number,
    stateTime: string,
    lightAmount: number,
    temperatureAsC: number,
    temperatureAsF: number,
    humidity: number,
    waterLevel: number,
    soilMoisture: number,
    operationType: number
  ) {
    this.id = id;
    this.stateTime = stateTime;
    this.lightAmount = lightAmount;
    this.temperatureAsC = temperatureAsC;
    this.temperatureAsF = temperatureAsF;
    this.humidity = humidity;
    this.waterLevel = waterLevel;
    this.soilMoisture = soilMoisture;
    this.operationType = operationType;
  }

  // Method to display data as a string
  toString(): string {
    return `SensorData {
            id: ${this.id},
            stateTime: ${this.stateTime},
            lightAmount: ${this.lightAmount},
            temperatureAsC: ${this.temperatureAsC},
            temperatureAsF: ${this.temperatureAsF},
            humidity: ${this.humidity},
            waterLevel: ${this.waterLevel},
            soilMoisture: ${this.soilMoisture},
            operationType: ${this.operationType}
        }`;
  }
}
