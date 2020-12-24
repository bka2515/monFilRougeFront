import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { BehaviorSubject,Observable } from 'rxjs';
import { User } from '../_models/User-model';
import jwt_decode from "jwt-decode";




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
this.currentUser = this.currentUserSubject.asObservable();
   }
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
    }

  login(data):Observable<any>{
    // return this.http.post(`${environment.url}/api/login_check`,data);
    

    return this.http.post(`${environment.ApiUrl}/api/login_check`, data)
    .pipe(
      map(response =>{
        // login successful if there's a jwt token in the response
        if (response) {
          localStorage.setItem('jwt', JSON.stringify(response));
        
          return response;
          // console.log(response);
          // return JSON.stringify(data);
      }
      })
    );

  }
  isLogin() {
    if (localStorage.getItem('response')) {
      return true;
    }
    return false;
  }
  getAuthorizationToken() {
    const response = JSON.parse(localStorage.getItem('jwt') || '{}');
    // console.log(response);
    return response.token;
  }
}
