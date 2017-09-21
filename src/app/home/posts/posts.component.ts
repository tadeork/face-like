import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postContent: Post;

  constructor(private postServ: PostsService) { }

  ngOnInit() {
  }

  likePost(): void {
    // console.log(`${this.postContent.id}`);
    this.postContent.likes++;
    this.postServ._updateLike(this.postContent);
  }
}
