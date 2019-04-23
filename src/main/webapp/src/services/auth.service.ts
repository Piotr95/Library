import { Injectable } from '@angular/core';
import {UserRegistrationModel} from "../models/user-registration-model";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "./alert.service";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private alertService: AlertService,
              private router: Router, private userService: UserService) {}


  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('username') !== null);
  isAuthenticated: Observable<boolean> = this.authenticated.asObservable();


  register(user: UserRegistrationModel) {
    const userData = {
      username: user.username,
      password: user.password
    };
    this.http.post('api/auth/register', {}, { params: userData })
      .subscribe(
        data => {
          this.alertService.success('Account created successfully', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(' User already exist.');
        }
      );
  }

  login(user: UserRegistrationModel) {
    const userData = {
      username: user.username,
      password: user.password
    };
    this.http.post('api/auth/login', {}, { params: userData })
      .subscribe(
        data => {
          this.authenticated.next(true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error('Wrong login or password.');
        }
      );
  }



  logout() {
    this.http.post('api/auth/logout', {}).subscribe(
      data => {
        localStorage.clear();
        this.authenticated.next(false);
        this.router.navigate(['/']);
      });
  }
}
