import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { SensorData } from '../chartsbox/SensorDatas';
import { Observable } from 'rxjs';
import {GreenhouseDailyAverageDTO} from "../models/GreenhouseDailyAverageDTO";
import {GreenhouseWeeklyAverageDTO} from "../models/GreenhouseWeeklyAverageDTO";
import {GreenhouseMonthlyAverageDTO} from "../models/GreenhouseMonthlyAverageDTO";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  private mainUrl = 'http://192.168.5.76:8080/api/greenhouse';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getDatas(): Observable<SensorData[]> {
    return this.http.get<SensorData[]>(`${this.mainUrl}/get`, { headers: this.getHeaders() });
  }

  getLastData(): Observable<SensorData> {
    return this.http.get<SensorData>(`${this.mainUrl}/getLastRecord`, { headers: this.getHeaders() });
  }

  getLastTenData(): Observable<SensorData[]> {
    return this.http.get<SensorData[]>(`${this.mainUrl}/getLast10Record`, { headers: this.getHeaders() });
  }

  getDailyAverages(date: string): Observable<GreenhouseDailyAverageDTO[]> {
    const params = new HttpParams().set('date', date);
    return this.http.get<GreenhouseDailyAverageDTO[]>(`${this.mainUrl}/daily-averages`, { headers: this.getHeaders(), params });
  }

  getWeeklyAverages(date: string): Observable<GreenhouseWeeklyAverageDTO[]> {
    const params = new HttpParams().set('date', date);
    return this.http.get<GreenhouseWeeklyAverageDTO[]>(`${this.mainUrl}/weekly-averages`, { headers: this.getHeaders(), params });
  }

  getMonthlyAverages(year: string, month: string): Observable<GreenhouseMonthlyAverageDTO[]> {
    const params = new HttpParams().set('year', year.toString()).set('month', month.toString());
    return this.http.get<GreenhouseMonthlyAverageDTO[]>(`${this.mainUrl}/monthly-averages`, { headers: this.getHeaders(), params });
  }
}
