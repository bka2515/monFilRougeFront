import { Injectable } from '@angular/core';
import { LoginService } from './auth/login.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let jwt = JSON.parse(localStorage.getItem('jwt')|| '{}');
    if (this.logSer.isLogin()) {
      const authToken = this.logSer.getAuthorizationToken();
      console.log(authToken);
      request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
    return next.handle(request);
}
  constructor(private logSer: LoginService) {}
}
