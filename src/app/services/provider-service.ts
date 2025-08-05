import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }

  getProviders(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8089/providers");
  }
 getProvidersById(id: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8089/providers/${id}`);
}

  addProvider(provider: any) {
    return this.http.post("http://localhost:8089/providers", provider);
  }

  deleteProvider(id: number) {
    return this.http.delete(`http://localhost:8089/providers/${id}`);
  }

  updateProvider( provider: any) {
    return this.http.put(`http://localhost:8089/providers`, provider);
  }
}
