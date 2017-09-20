import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Post } from '../../models/Post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {
  urlPosts = 'http://localhost:3000/posts';

  constructor(private http: Http) { }

 _getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get(`${this.urlPosts}?uid=${userId}`).map(post => post.json());
 }

  _getAllPosts(): void {

  }

  _
}