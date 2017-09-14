import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;

  constructor() { }

  ngOnInit() {
  }

  logUser(): void {
    console.log(`${this.login.email} ${this.login.password}`);
  }

}
