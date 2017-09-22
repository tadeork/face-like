import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostsService} from '../../services/posts.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postContent: Post;
  userName = '';

  constructor(
    private postServ: PostsService,
    private user$: UserService
  ) { }

  ngOnInit() {
   this.user$._getUserName(this.postContent.uid).subscribe(name => {
     this.userName =  name.firstName;
   });
  }

  likePost(): void {
    // console.log(`${this.postContent.id}`);
    this.postContent.likes++;
    this.postServ._updateLike(this.postContent);
  }
}
