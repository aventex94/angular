import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;

  constructor(private userService:UserServiceService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({ //INSTANCIAR EL FORMGROUP
      username: ['', [Validators.required]], //INPUTS DEL FORMULARIO, PRIMER PARAMETRO VALOR INICIAL, SEGUNDO PARAMETRO VALIDACIONES
      password: ['42467766', Validators.required],
    });
    console.log("loginForm",this.loginForm)
    
  }

  onSubmitLoginForm() {
    if(this.loginForm.invalid)
      return;
    
    this.userService.getAutenticacion(this.loginForm.value)
    .subscribe((res) => {
      console.log("res",res);
      console.log("token",res.headers.get('token'));
      localStorage.setItem("token", res.headers.get('token'));
      this.userService.setUser(res.body);
      this.router.navigateByUrl('');
    });
    
  }

}
