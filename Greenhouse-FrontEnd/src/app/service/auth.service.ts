import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mainUrl = "http://192.168.5.76:8080/api/auth";

  constructor(private http: HttpClient) { }

  register(data: Partial<{ email: string | null; password: string | null; role: string | null; }>): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post<any>(`${this.mainUrl}/signup`, data, { headers });
  }

  login(data: ɵTypedOrUntyped<{
    password: FormControl<string | null>;
    username: FormControl<string | null>
  }, ɵFormGroupValue<{
    password: FormControl<string | null>;
    username: FormControl<string | null>
  }>, any>): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.mainUrl}/login`, data, { headers });
  }
}
