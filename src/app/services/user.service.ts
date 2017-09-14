import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';

@Injectable()
export class UserService {
  url = 'http://localhost:3000/users';
  user: User;

  constructor(private http: Http) { 
    this.http.get(this.url).subscribe();
  }

}
