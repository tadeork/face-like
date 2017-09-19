import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  name: string;
  sub: any;

  constructor(private route: ActivatedRoute) {
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
   }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
