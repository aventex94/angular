import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateComponent } from './template/template.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { RouterModule } from '@angular/router';
import {UserClass} from '../user-class';
import {UserServiceService} from '../user-service.service';
import { AlertasCustomComponent } from './alertas-custom/alertas-custom.component';
import { CarteleraModule } from '../cartelera/cartelera.module';

@NgModule({
  declarations: [TemplateComponent, NavbarComponent, FooterComponent, HomeComponent, NavbarAdminComponent, AlertasCustomComponent],
  imports: [
    
    CarteleraModule,
    RouterModule,
    CommonModule,
    NgbModule,
  ],
  providers:[UserServiceService],
  exports: [
    HomeComponent,NavbarComponent,FooterComponent,AlertasCustomComponent
  ]
})
export class ModuloGenericoModule { }
