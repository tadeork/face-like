import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/Friend';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[];

  constructor() { }

  ngOnInit() {
  }

}
