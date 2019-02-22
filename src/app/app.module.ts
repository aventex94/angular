import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulo-generico/home/home.component';
import { NavbarComponent } from './modulo-generico/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './modulo-generico/footer/footer.component';
import { ModuloGenericoModule } from './modulo-generico/modulo-generico.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login-logout/login/login.component';
import { LoginLogoutModule } from './login-logout/login-logout.module';
import { UserServiceService } from './user-service.service';
import { CarteleraServiceService } from './cartelera-service.service';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { componentFactoryName } from '@angular/compiler';
import { AdminModule } from './admin/admin.module';
import { AltaCarteleraComponent } from './admin/alta-cartelera/alta-cartelera.component';
import { AuthGuardRoleService } from './auth-guard-role.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]

  },
  {
    path: 'alta-cartelera',
    component: AltaCarteleraComponent,
    canActivate:[AuthGuardRoleService]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
    
  ],
  imports: [
    AdminModule,
    HttpClientModule,
    LoginLogoutModule,
    ModuloGenericoModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  providers: [UserServiceService,CarteleraServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
