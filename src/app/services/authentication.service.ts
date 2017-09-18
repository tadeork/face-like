import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../models/User';

@Injectable()
export class AuthenticationService {
  urlBackend = 'http://localhost:3000/users/';

  constructor(private http: Http) { }

  login(email: string, password: string) {
    console.log(`${this.urlBackend}?email=${email}`);
    return this.http.get(`${this.urlBackend}?email=${email}`)
      .map((response: Response) => {
        const user = response.json();
        console.log(JSON.stringify(user));
        if ( user.password === password ) {
          localStorage.setItem('presentUser', JSON.stringify(user));
        }
        return user;
      } );
  }

  logout() {
    localStorage.removeItem('presentUser');
    console.log('usuario deslogueado');
  }

}
