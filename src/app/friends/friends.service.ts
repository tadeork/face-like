import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Friend} from '../../models/Friend';

@Injectable()
export class FriendsService {
  urlFriends = 'http://localhost:3000/users/';

  constructor(private http: Http) { }

  // TODO buscar todos los usuarios
  _getAllUsers(): Observable<Friend[]> {
    return this.http.get(this.urlFriends).map(user => user.json());
  }

  _addFriend(uid: number): void {

  }
  // TODO agregar a amigos
  // TODO eliminar amigo


}
