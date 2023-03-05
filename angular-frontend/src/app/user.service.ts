import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const baseUrl = 'http://localhost:5050/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private http: HttpClient) { }

  // public getUsersList(): Observable<any> {
  //   return this.http.get(`/getUsersList`);
  // }
  // public creatUser(): Observable<any> {
  //   return this.http.get(`/creatUser`);
  // }
  // public updateUser(): Observable<any> {
  //   return this.http.get(`/updateUser`);
  // }
  // public deleteUder(): Observable<any> {
  //   return this.http.get(`/deleteUser`);
  // }
  // public userDetails(): Observable<any> {
  //   return this.http.get(`/getUsersList`);
  // }

}
