import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Libro } from "./libro";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  API_URL = "https://berchet.regonline.it/didattica/stud_free/angular_json";
  public getLibri(ricerca: string): Observable<Libro[]> {
    ricerca = ricerca.trim();
    const options = ricerca ? { params: new HttpParams().set('stringa', ricerca)} : {};
    return this.httpClient.get<Libro[]>(`${this.API_URL}/biblioteca.html`, options);
  }
  public getLibroDetail(n: number)  {
    let param: string = n.toString();
    const options = n ? { params: new HttpParams().set('n', param)} : {};
    return this.httpClient.get(`${this.API_URL}/biblioteca.html`, options);
  }
}
