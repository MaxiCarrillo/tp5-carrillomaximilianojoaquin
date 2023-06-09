import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  getTickets(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get("http://localhost:3000/api/ticket/", httpOptions);
  }

  getTicket(id:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get("http://localhost:3000/api/ticket/id/"+id, httpOptions);
  }

  getTicketsByCategoria(categoria:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get("http://localhost:3000/api/ticket/"+categoria, httpOptions);
  }

  getEspectadores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get("http://localhost:3000/api/espectador/", httpOptions);
  }

  postTicket(ticket:Ticket): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    }
    let body = JSON.stringify(ticket);
    return this._http.post("http://localhost:3000/api/ticket/", body, httpOptions);
  }

  putTicket(ticket:Ticket):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    }
    let body = JSON.stringify(ticket);
    return this._http.put("http://localhost:3000/api/ticket/"+ticket._id, body, httpOptions);
  }

  deleteTicket(id:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this._http.delete("http://localhost:3000/api/ticket/"+id, httpOptions);
  }

}
