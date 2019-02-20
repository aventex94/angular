import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertaPropia } from 'src/app/alerta-propia';
import { AlertasCustomComponent } from 'src/app/modulo-generico/alertas-custom/alertas-custom.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(AlertasCustomComponent) alerta: AlertasCustomComponent;
  loginForm: FormGroup;


  constructor(private userService: UserServiceService, private fb: FormBuilder, private router: Router) { //INYECTAR LOS SERVICIOS NECESARIOS Y EL FORMBUILDER

  }

  ngOnInit() {
    this.loginForm = this.fb.group({ //INSTANCIAR EL FORMGROUP
      username: ['', [Validators.required]], //INPUTS DEL FORMULARIO, PRIMER PARAMETRO VALOR INICIAL, SEGUNDO PARAMETRO VALIDACIONES
      password: ['42467766', Validators.required],
    });
    console.log("loginForm", this.loginForm)

  }

  onSubmitLoginForm() {
    if (this.loginForm.invalid)
      return;

    this.userService.getAutenticacion(this.loginForm.value)
      .subscribe(
        (res) => {

          console.log("res", res);
          console.log("token", res.headers.get('token'));
          localStorage.setItem("token", res.headers.get('token'));
          this.userService.setUser(res.body);
          this.router.navigateByUrl('');
        },
        (err) => {
          
          this.alerta.dispararAlerta('danger','Usuario o password incorrecto');
          //this.router.navigateByUrl('');
        });

  }

}
