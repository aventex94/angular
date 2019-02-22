import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaCarteleraComponent } from './alta-cartelera/alta-cartelera.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteleraServiceService } from '../cartelera-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AltaCarteleraComponent],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    AltaCarteleraComponent
  ],
  providers:[CarteleraServiceService]
})
export class AdminModule { }
