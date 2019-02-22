import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRoleService implements CanActivate {
  constructor(private routes: Router) { }
  canActivate(){
    let adminUser = new UserClass();
    adminUser = JSON.parse(localStorage.getItem("user"));
    if(adminUser){
      if(adminUser.cargo=='administrador'){
        return true;
      }else{
        this.routes.navigateByUrl("");
        return false;
      }
    }else{
      this.routes.navigateByUrl("/login");
      return false;
    }
  }
}
