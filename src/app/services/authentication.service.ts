import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../models/User';

@Injectable()
export class AuthenticationService {
  user: User;
  urlBackend = 'http://localhost:3000/users/';

  constructor(private http: Http) { }

  login(email: string, password: string) {
    return this.http.get(`${this.urlBackend}?email=${email}`)
      .map((response: Response) => {
        const user = response.json();
        this.user = user[0];
        if ( user[0].password === password ) {
          localStorage.setItem('presentUser', JSON.stringify(this.user));
        }
        return user;
      } );
  }

  logout() {
    localStorage.removeItem('presentUser');
  }

}
