import { Injectable } from '@angular/core';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtdecodeService {

  constructor() { }

  decodeAndStoreToken(token: string): void {
    try {
      const decodedToken = jwt.jwtDecode(token);
      localStorage.setItem('decodedToken', JSON.stringify(decodedToken));
      // @ts-ignore
      localStorage.setItem('role', decodedToken.role[0].authority)
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
}
