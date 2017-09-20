import {EventEmitter, Component, OnInit, Input, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  @Output() hide = new EventEmitter<boolean>();
  edit = false;

  constructor() { }

  editProfile(): void {
    this.hide.emit(this.edit);
    this.edit = !this.edit;
  }

  ngOnInit() {
  }

}
