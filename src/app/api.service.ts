import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from "./libro";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  private API_URL = "https://liceoberchet.gov.it:3306";
  
  public getLibri(ricerca: string): Observable<Libro[]> {
    ricerca = ricerca.trim();
    return this.httpClient.get<Libro[]>(`${this.API_URL}/search/` + ricerca);
  }
  
  public getLibroDetail(n: number)  {
    return this.httpClient.get(`${this.API_URL}/libro/` + n);
  }
}
