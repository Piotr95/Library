import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";


const routes: Routes = [
  //{ path: '', component: LoginComponent  },//canActivate, RouteGuardService
  // { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: HomeComponent},
  //{ path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },

  { path: '**', component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
