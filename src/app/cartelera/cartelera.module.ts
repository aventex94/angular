import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario/comentario.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { CarteleraComponent } from './cartelera/cartelera.component';

@NgModule({
  declarations: [ComentarioComponent, PublicacionComponent, CarteleraComponent],
  imports: [
    CommonModule
  ]
})
export class CarteleraModule { }
