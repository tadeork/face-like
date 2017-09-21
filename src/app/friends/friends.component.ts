import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/Friend';
import { Observable } from 'rxjs/Observable';
import {FriendsService} from './friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Observable<Friend[]>;

  constructor(private friendsServ: FriendsService ) { }

  ngOnInit() {
    this.showPeople();
  }

  showPeople(): void {
    this.friends = this.friendsServ._getAllUsers();
  }

}
