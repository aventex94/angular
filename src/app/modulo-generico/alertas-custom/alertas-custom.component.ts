import { Component, OnInit } from '@angular/core';
import { AlertaPropia } from 'src/app/alerta-propia';



@Component({
  selector: 'app-alertas-custom',
  templateUrl: './alertas-custom.component.html',
  styleUrls: ['./alertas-custom.component.css']
})
export class AlertasCustomComponent implements OnInit {
  estado:boolean;
  estructura:AlertaPropia;
  abierto:boolean; 
  
  
  dispararAlerta(tipo:String,mensaje:String){
    this.estructura={
      tipo:tipo,
      mensaje:mensaje
    }
    this.estado=true;
    this.abierto=false;  
  }
  close() {
    this.abierto=true;
  }
  constructor() {
    
   }

  ngOnInit() {
    this.abierto=false;
    this.estado=false;
  }

}
