import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../environments/environment.devolopment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get("http://localhost:8089/providers");
  }
}
