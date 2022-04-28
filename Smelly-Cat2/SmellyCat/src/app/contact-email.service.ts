import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {
  ServerUrl = 'http://localhost:3000/send';
   
  constructor(private http: HttpClient) { }

  PostMsg(formdata: any) {
    return this.http.post(this.ServerUrl,
      JSON.stringify(formdata),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
    
}
