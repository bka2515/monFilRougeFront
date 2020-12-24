import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { LoginService } from "../auth/login.service";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        let reqUrl = environment.ApiUrl;
        req = req.clone({ setHeaders : {Authorization: `Bearer ${this.loginService.getAuthorizationToken()}`
        }
        });
        return next.handle(req);
    }
}