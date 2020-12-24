
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from '../_models/User-model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<User[]>(`${environment.ApiUrl}/api/admin/users`);
    }
    register(user: User) {
        return this.http.post(`auth/register`, user);
        }

        
        // public create = (route: string, body) => {
        //     return this.http.post(this.createCompleteRoute(route, environment.ApiUrl), body, this.generateHeaders());
        //   }

        //   public update = (route: string, body) => {
        //     return this.http.put(this.createCompleteRoute(route, environment.ApiUrl), body, this.generateHeaders());
        //   }

        //   public delete = (route: string) => {
        //     return this.http.delete(this.createCompleteRoute(route, environment.ApiUrl));
        //   }

        //   private createCompleteRoute = (route: string, envAddress: string) => {
        //     return `${envAddress}/${route}`;
        //   }

        //   private generateHeaders = () => {
        //     return {
        //       headers: new HttpHeaders({'Content-Type': 'application/json'})
        //     }
        //   }


      }