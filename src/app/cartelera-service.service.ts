import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CarteleraClass } from './cartelera-class';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': '2123456',
    'id': '2'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarteleraServiceService {
  carteleraUrl = "http://localhost:8080/ttps-spring/carteleras";
  constructor(private http: HttpClient) { }
  getCarteleras(): Observable<CarteleraClass[]> {
    return this.http.get<CarteleraClass[]>(this.carteleraUrl, httpOptions).pipe(
      catchError((err: any) => { return of([]) }), //DENTRO DEL PIPE ESTAN LOS OPERADORES: CATCH, MAP, ETC.


    )
  }


}
