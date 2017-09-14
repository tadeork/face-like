import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail  = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  logUser(): void {
    console.log(`${this.userEmail} ${this.password}`);
  }

}
