import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";


const routes: Routes = [
  { path: 'register',component:RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '',component: HomeComponent},
  //{ path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },

  { path: '**', component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
