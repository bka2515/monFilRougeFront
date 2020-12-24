import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' ; 
import { environment } from '../environments/environment';
import { Profils } from '../_models/profils-model'; 

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }
  
  getData = () => {
    return this.http.get<Profils[]>(`${environment.ApiUrl}/api/admin/profils`);
  }
}
