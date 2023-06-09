import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public getMonedas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com',
        'X-RapidAPI-Key': '98b503c8dcmsh43cf2bf45c2fb86p14c31cjsn4c7cef2aa00f',
      }),
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies", httpOptions);
  }

  public convertir(valor:string,de:string,a:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': '98b503c8dcmsh43cf2bf45c2fb86p14c31cjsn4c7cef2aa00f',
      }),
    }
    const body = new HttpParams()
      .set('from-value', valor).set('from-type',de).set('to-type',a);
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body, httpOptions);
  }

  postTransaccion(transaccion: Transaccion): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    }
   
    let body = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/transaccion", body, httpOptions);
  }

  getTransacciones(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/transaccion", httpOptions);
  }

  getTransaccionByMoneda(moneda:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/transaccion/moneda/"+moneda, httpOptions);
  }

}
