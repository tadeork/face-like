import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/Friend';
import { Observable } from 'rxjs/Observable';
import {FriendsService} from './friends.service';
import { UserService } from '../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friendsObs: Observable<Friend[]>;
  user: User;
  userFriends: Friend[] = [];
  userFriend: User;

  constructor(
    private friendsServ: FriendsService,
    private userServ: UserService,
    ) {
    this.user = this.userServ._getUser();
    this.user.friends.forEach(frn => this.userFriends.push(frn));
    this.showPeople();
  }

  ngOnInit() {
  }

  addFriend(friend: Friend): void {
    this.userFriend = {
      id: friend.id,
      lastName: friend.lastName,
      firstName: friend.firstName,
      email: friend.email,
      userName: friend.userName,
      avatar: friend.avatar
    };
    this.user.friends.push({'id': friend.id});
    this.friendsServ._updateFriends(this.user);
    this.showPeople();
  }

  removeFriend(friend: Friend): void {
    this.user.friends.splice(friend.id, 1);
    this.friendsServ._updateFriends(this.user);
    this.showPeople();
  }

  showPeople(): void {
    this.friendsObs = this.friendsServ._getAllUsers();
  }

}
