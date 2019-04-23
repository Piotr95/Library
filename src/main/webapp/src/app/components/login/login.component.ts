import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserLoginModel} from "../../../models/user-login-model";
import {AuthService} from "../../../services/auth.service";
import {AlertService} from "../../../services/alert.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tempUser: UserLoginModel = new UserLoginModel();
  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  login() {
    const loginUser = new UserLoginModel();

    try {
      loginUser.setUsername(this.tempUser.username);
      loginUser.setPassword(this.tempUser.password);
    } catch (e) {
      this.alertService.error(e.message);
      return;
    }

    this.authService.login(loginUser);
  }

}
