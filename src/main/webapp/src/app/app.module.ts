import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {FormsModule} from "@angular/forms";
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {AlertService} from "../services/alert.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavmenuComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
