import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FormModel {
  id?: number;
  name: string;
  email: string;
  message: string;
  subject: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'https://localhost:7132';
  //private apiUrl = 'https://localhost:7132'; for production
  constructor(private http: HttpClient) { }

  //submitForm(URL: string, form: FormModel): Observable<any> {
  //  return this.http.post(this.apiUrl + URL, form);
  //}

  Post(API: any, payload: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<any>(`${this.apiUrl}/${API}`, payload, { headers });
  }
}
