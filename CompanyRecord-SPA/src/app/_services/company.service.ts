import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../_models/company';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodeToken: any;
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    this.decodeToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    return this.http.get<Company[]>(this.baseUrl + 'company/' + this.decodeToken?.unique_name);
  }

  getCompany(id): Observable<Company>{
    this.decodeToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    return this.http.get<Company>(this.baseUrl + 'company/' + id + '/' + this.decodeToken?.unique_name);
  }
}
