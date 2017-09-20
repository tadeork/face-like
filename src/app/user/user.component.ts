import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/User';
import { FriendsService } from '../services/friends.service';
import {Friend} from '../../models/Friend';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  friendObs: Observable<Friend>[] = [];
  friendList: Friend[] = [];
  showFriends = true;

  constructor( private friendsServ: FriendsService ) { }

  friends(): void {
    this.friendObs = this.friendsServ._getAllFriends(this.user.friends);
    this.friendObs.forEach( friend => friend.subscribe(
      guy => this.friendList.push(guy)
    ));
  }

  editProfile(edit: boolean): void {
    this.showFriends = !this.showFriends;
  }

  ngOnInit() {
    this.user = {
      lastName: '',
      firstName: '',
      email: '',
      userName: '',
      friends: [],
      posts: [],
      avatar: ''
    };
    this.user = JSON.parse(localStorage.getItem('presentUser'));
    this.friends();
  }

  ngOnDestroy() {
  }

}
