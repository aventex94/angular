import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaCarteleraComponent } from './alta-cartelera/alta-cartelera.component';

@NgModule({
  declarations: [AltaCarteleraComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AltaCarteleraComponent
  ]
})
export class AdminModule { }
