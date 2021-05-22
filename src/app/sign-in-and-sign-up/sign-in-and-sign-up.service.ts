import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  nicNumber: string;
  password: string;
  district?: string;
  city?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignInAndSignUpService {
  constructor(private http: HttpClient) { }
  /** POST: add a new user to the database */
  signUp(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<any>('http://localhost:3000/user/register', user, httpOptions)
  }

  /** POST: add a new user to the database */
  signIn(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<any>('http://localhost:3000/user/login', user, httpOptions)
  }

  /** POST: add a new user to the database */
  upload(file): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<any>('http://localhost:3000/uploadfile', file, httpOptions)
  }

  getResult(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.get<any>('http://localhost:3000/result', httpOptions)
  }
}
