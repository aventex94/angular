import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { UserClass } from '../user-class';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[UserServiceService],
  exports:[
    LoginComponent
  ]
  
})
export class LoginLogoutModule { }
