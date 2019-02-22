import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  @Input()
  cartelera;

  
  constructor() { }

  ngOnInit() {
  }

}
