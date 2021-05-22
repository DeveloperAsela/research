import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  userName: string;
  email: string;
  password: string;
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
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  return this.http.post<any>('http://localhost:3000`//api/register', user, httpOptions)
}
}
