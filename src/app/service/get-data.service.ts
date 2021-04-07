import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private appUrl = 'https://localhost:44345/';
  private apiUrl = 'api/Personas';

  constructor(private http: HttpClient) { }

  getListPersonas(): Observable<any> {
    return this.http.get(this.appUrl + this.apiUrl);
  }

}
