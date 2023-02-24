import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  messages: string[] = [];
  paises: any[] = [];
  constructor(private http: HttpClient) { }

  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }

  obtener1() {
    this.http.get("https://restcountries.com/v3.1/all").subscribe(data => {
      console.log(data);
    });
  }
  obtener(): Observable<any> {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  obtenerPaises(cadena: String): Observable<any> {

    return this.http.get("https://restcountries.com/v3.1/name/" + cadena);

  }

}

