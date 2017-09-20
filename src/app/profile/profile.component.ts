import {EventEmitter, Component, OnInit, Input, Output} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  @Output() hide = new EventEmitter<boolean>();
  edit = false;
  prevUser: User;

  constructor(private userServ: UserService) { }

  editProfile(): void {
    this.hide.emit(this.edit);
    this.edit = !this.edit;
  }

  ngOnInit() {
    this.prevUser = this.user;
  }

  saveEdit(): void {
    // con este if me aseguro que sólo se llame cuando haya cambiado
    if (this.prevUser === this.user) {
      this.userServ.save(this.user);
      localStorage.setItem('presentUser', JSON.stringify(this.user));
    }
    this.editProfile();
  }

}
