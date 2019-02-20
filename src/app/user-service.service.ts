
import { Injectable } from '@angular/core';
import { User } from './user';
import { UserClass } from './user-class';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { EEXIST } from 'constants';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userAux = new BehaviorSubject<User>(null);
  
  loginUrl = "http://localhost:8080/ttps-spring/autenticacion"

  createUser(): UserClass {
    return new UserClass('1');
  }
  isLogin(): boolean {
    return this.userAux != null;
  }
  isAdmin(): boolean {
    return true;
  }

  constructor(private http: HttpClient) { 
  }

  setUser(user:User){
    this.userAux.next(user);
    localStorage.setItem("user", JSON.stringify(user));
  }
  getAutenticacion(user: User): Observable<any> {
    return this.http.post(this.loginUrl, user, {observe:'response'}).pipe(
      catchError((err:any) => {
        return throwError(JSON.stringify(err.status));
      }

      )
    )

      
    
  }
}
