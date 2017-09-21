import { Component, OnInit, OnDestroy } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  obsPosts: Observable<Post[]>;
  user: User;

  constructor(private postsServ: PostsService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('presentUser'));
    this.obsPosts = this.postsServ._getUserPosts(this.user.id);
  }

  ngOnDestroy() {
    // this.postsServ._getAllPosts(this.user);
  }

}
