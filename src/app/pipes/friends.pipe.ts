import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friends'
})
export class FriendsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
