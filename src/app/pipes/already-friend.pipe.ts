import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../models/Friend';
import * as _ from 'lodash';

@Pipe({
  name: 'alreadyFriend'
})
export class AlreadyFriendPipe implements PipeTransform {

  transform(friends: any, user: any): any {
    let diff = [];
    const fid = [];
    const usf = [];
    let friendList: Friend[] = [];

    if (friends) {
      user.friends.forEach(u => usf.push(u.id));
      friends.forEach(f => fid.push(f.id));

      diff = _.difference(fid, usf);
      diff.forEach( nonf => {
        friends.forEach(unicF => {
          if (nonf === unicF.id) {
            friendList.push(unicF);
          }
        });
      });
      return friendList;
    }
  }

}
