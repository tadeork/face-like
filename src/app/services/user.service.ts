import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';

@Injectable()
export class UserService {
  url = 'http://localhost:3000/users';
  user: User;
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.http.get(this.url).subscribe();
    this.headers = new Headers({'Content-type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'});
    this.options = new RequestOptions({headers: this.headers});
  }

  save(user: User): void {
    const body = JSON.stringify(user);
    this.http.patch(`${this.url}/${user.id}`, body, this.options).subscribe();
  }

  _getUser(): User {
    return JSON.parse(localStorage.getItem('presentUser'));
  }

  _getUserName(uid: number): Observable<User> {
    return this.http.get(`${this.url}/${uid}`).map( resp => resp.json());
  }

}
