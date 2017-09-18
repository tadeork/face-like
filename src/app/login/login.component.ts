import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginModel: Login;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService
    ) { }

  ngOnInit() {
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loginModel = {
      email: '',
      password: ''
    };
  }

  logUser() {
    console.log(`${this.loginModel.email} ${this.loginModel.password}`);
    this.auth.login(this.loginModel.email, this.loginModel.password)
      .subscribe( data => { this.router.navigate([this.returnUrl]);
      },
        error => console.log('error'));
  }
  // conectarse al servicio y probar que sea un usuario válido

  login(): void {
    console.log(`${this.loginModel.email} ${this.loginModel.password}`);
  }

}
