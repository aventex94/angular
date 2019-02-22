import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarteleraServiceService } from 'src/app/cartelera-service.service';
import { identifierModuleUrl } from '@angular/compiler';
import { UserClass } from 'src/app/user-class';
import { User } from 'src/app/user';
import { AlertasCustomComponent } from 'src/app/modulo-generico/alertas-custom/alertas-custom.component';

@Component({
  selector: 'app-alta-cartelera',
  templateUrl: './alta-cartelera.component.html',
  styleUrls: ['./alta-cartelera.component.css'],


})
export class AltaCarteleraComponent implements OnInit {

  @ViewChild(AlertasCustomComponent) alerta: AlertasCustomComponent;

  altaCarteleraForm: FormGroup;
  constructor(private fb: FormBuilder, private routes: Router, private carteleraService: CarteleraServiceService) { }

  ngOnInit() {
    this.altaCarteleraForm = this.fb.group({
      nombre: ['', [Validators.required]],
      año: ['', Validators.required],
    });

  }
  onSubmitAltaCarteleraForm() {

    if (this.altaCarteleraForm.invalid) {

      return;
    }

    let adminLogin: User;
    adminLogin = JSON.parse(localStorage.getItem("user"));

    this.carteleraService.postCartelera(adminLogin.id, this.altaCarteleraForm.value, '1123456').subscribe(
      (res) => {
        this.alerta.dispararAlerta('success','Se agrego correctamente la cartelera');
      },
      (err) => {
        this.alerta.dispararAlerta('danger','Ocurrio un error en la creacion de la cartelera');
      }
    )

  }

}
