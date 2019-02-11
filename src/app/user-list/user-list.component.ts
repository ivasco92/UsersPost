import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  userList: User[] = [];
  @Output()
  userEmitter = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }



}
