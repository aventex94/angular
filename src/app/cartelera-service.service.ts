import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { CarteleraClass } from './cartelera-class';
import { User } from './user';
import { Cartelera } from './cartelera';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class CarteleraServiceService {
  
  carteleraUrl = "http://localhost:8080/ttps-spring/carteleras";
  constructor(private http: HttpClient) { }
  getCarteleras(id:string,token:string): Observable<CarteleraClass[]> {
    const headers = new HttpHeaders().set("token",token).set("id",id);
    return this.http.get<CarteleraClass[]>(this.carteleraUrl, { headers:headers} ).pipe(
      catchError((err: any) => { return of([]) }), //DENTRO DEL PIPE ESTAN LOS OPERADORES: CATCH, MAP, ETC.


    )
  }
  postCartelera(id: string, cartelera: Cartelera, token: string): Observable<any> {


    const headers = new HttpHeaders().set("token", token).set("id", id);

    return this.http.post(this.carteleraUrl, cartelera, { headers: headers }).pipe(
      catchError(
        (err: any) => {
          return throwError(JSON.stringify(err.headers));
        }
      )
    )
  }
 


}
