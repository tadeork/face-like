import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Friend} from '../../models/Friend';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FriendsListService {
  urlFriends = 'http://localhost:3000/users/';

  constructor(private http: Http) { }

  // devuelve un único usuario amigo
  _getFriend(id: number): Observable<Friend> {
    return this.http.get(`${this.urlFriends}${id}`).map(friend => friend.json() as Friend);
  }

  _getAllFriends(friends: any): Observable<Friend>[] {
    const friendsObservables: Observable<Friend>[] = [];
    friends.forEach( friend => {
      friendsObservables.push(this._getFriend(friend.id));
    });
    return friendsObservables;
  }

}
