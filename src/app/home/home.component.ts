import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { FriendsService } from '../services/friends.service';
import {Friend} from '../../models/Friend';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  friendList: Friend[] = [];
  friendsObs: Observable<Friend>[];

  constructor(
    private route: ActivatedRoute,
    private friendsServ: FriendsService
  ) {
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

  friends(): void {
    this.friendsObs = this.friendsServ._getAllFriends(this.user.friends);
    this.friendsObs.forEach(friend => friend.subscribe(
      guy => this.friendList.push(guy)
    ));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.friendList = [];
  }

}
