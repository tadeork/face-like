import { Component, OnInit, OnDestroy } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Rx';

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
    this.postsServ._getAllPosts(this.user).subscribe(post => {
      post.subscribe( friendPost => {
        if (friendPost.length) {
          this.posts.push(...friendPost);
        }
      });
    });
    // this.obsPosts = this.postsServ._getUserPosts(this.user.id);
    // this.friendsPosts(this.user);
  }

  ngOnDestroy() {
    // this.postsServ._getAllPosts(this.user);
  }
  friendsPosts(user: User): void {
    user.friends.forEach(friend => {
      this.obsPosts.merge(this.postsServ._getUserPosts(friend.id));
    });
  }
}
