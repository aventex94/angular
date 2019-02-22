import {Component, OnInit} from '@angular/core';
import { CarteleraClass } from './cartelera-class';
import { CarteleraServiceService } from './cartelera-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carteleras : CarteleraClass[];
  
  constructor(public CarteleraServiceService:CarteleraServiceService){
    
  }
  
}
