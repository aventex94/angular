import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { UserClass } from '../user-class';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuloGenericoModule } from '../modulo-generico/modulo-generico.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ModuloGenericoModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[UserServiceService],
  exports:[
    LoginComponent
  ]
  
})
export class LoginLogoutModule { }
