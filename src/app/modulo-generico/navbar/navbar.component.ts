import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser: User;
  navbarOpen = false;
  
  constructor(private userService:UserServiceService){ 
    
  }

  ngOnInit() {
    this.userService.userAux.subscribe(user =>{ 
      this.loggedUser = user; 
      console.log(this.loggedUser);
    });

    let storedUser  = localStorage.getItem("user");
    if(storedUser){
      this.loggedUser = JSON.parse(storedUser);
    } 
    
  }

  logout(){
    this.userService.userAux.next(null);
    localStorage.removeItem("user");
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  

}
