import { Component, OnInit } from '@angular/core';
import { CarteleraServiceService } from 'src/app/cartelera-service.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { Cartelera } from 'src/app/cartelera';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carteleraService:CarteleraServiceService,private routes:Router) { }
  carteleras:Cartelera[];
  ngOnInit() {
    let currentUser:User;
    currentUser = JSON.parse(localStorage.getItem("user"));
    if(currentUser){
      this.carteleraService.getCarteleras(currentUser.id,'2123456').subscribe(
        (res)=>{
            this.carteleras=res;
            console.log(this.carteleras);
        },
        (err)=>{
          console.log(err);
        }
      )
    }else{
      this.routes.navigateByUrl("/login");
    }
    
  }

}
