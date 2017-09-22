import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Post } from '../../models/Post';
import {Observable} from 'rxjs/Rx';
import {User} from '../../models/User';

@Injectable()
export class PostsService {
  urlPosts = 'http://localhost:3000/posts';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'});
    this.options = new RequestOptions({headers: this.headers});
  }

 _getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get(`${this.urlPosts}?uid=${userId}`).map(post => post.json());
 }

  _getAllPosts(user: User): Observable<Observable<Post[]>> {
    const postsObs: Observable<Post[]>[] = [];
    user.friends.forEach( friend => {
      postsObs.push(this._getUserPosts(friend.id));
    });
    postsObs.push(this._getUserPosts(user.id));
    // este observable debe ser de Rx sino merge no funciona
    return Observable.merge(postsObs);
  }

  _updateLike(post: Post): void {
    const body = JSON.stringify(post);
    this.http.patch(`${this.urlPosts}/${post.id}`, body, this.options).subscribe();
  }
  // TODO ordenar por fecha (crear un pipe)
}
