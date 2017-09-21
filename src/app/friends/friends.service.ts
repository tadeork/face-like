import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Friend} from '../../models/Friend';
import {User} from '../../models/User';
import {UserService} from '../services/user.service';

@Injectable()
export class FriendsService {
  urlFriends = 'http://localhost:3000/users/';

  constructor(private http: Http, private profile: UserService) { }

  // TODO buscar todos los usuarios
  _getAllUsers(): Observable<Friend[]> {
    return this.http.get(this.urlFriends).map(user => user.json());
  }

  // esto es re violento
  _updateFriends(user: User): void {
    this.profile.save(user);
    localStorage.setItem('presentUser', JSON.stringify(user));
  }

  // todo relacionar amistad
}
