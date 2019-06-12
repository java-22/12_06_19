import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SecretPageComponent } from './secret-page/secret-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SecretGuardService} from './secret.guard.service';
import { SecurityPageComponent } from './security-page/security-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpProvider} from './http.provider';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'security',component:SecurityPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'secret', component:SecretPageComponent, canActivate:[SecretGuardService]}
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SecretPageComponent,
    SecurityPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SecretGuardService, HttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
