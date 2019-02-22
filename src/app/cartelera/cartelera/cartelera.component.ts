import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cartelera } from 'src/app/cartelera';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  @Input()
  cartelera;

  
  constructor(private routes:Router) { }
  abrirCartelera(cartelera:Cartelera){
    console.log("Cartelera",cartelera);
    //this.routes.navigateByUrl("/cartelera:" + cartelera); 
  }
  ngOnInit() {
  }

}
