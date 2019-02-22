import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/user';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  
  constructor(private router:Router) { }

  canActivate(){
    const currentUser = localStorage.getItem("user");
    if(currentUser){
      this.router.navigateByUrl("");
      return false;
    }else{
      return true;
    }

  }
}
