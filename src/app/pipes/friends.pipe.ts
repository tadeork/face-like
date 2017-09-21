import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friends'
})
export class FriendsPipe implements PipeTransform {

  transform(friends: any, user: any): any {
    if (friends) {
      return friends.filter( friend => friend.id !== user.id);
    }
  }

}
