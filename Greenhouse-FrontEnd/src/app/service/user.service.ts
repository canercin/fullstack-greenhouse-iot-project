import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private mainUrl = "http://192.168.5.76:8080/api/user";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.mainUrl, { headers: this.getHeaders() });
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.mainUrl}/${id}`, { headers: this.getHeaders() });
  }
}
