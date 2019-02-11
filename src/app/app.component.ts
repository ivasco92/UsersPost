import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './models/User';
import {PostService} from './services/post.service';
import {Post} from './models/Post';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usersAppCompontent: User[] = [];
  selectedUser: User;
  postAppComponentList: Post[] = [];
  loader = true;

  constructor(private userService: UserService, private postService: PostService) {
    userService.getUsers()
      .pipe(finalize(() => this.loader = false))
      .subscribe((response) => this.usersAppCompontent = response);
  }

  retrivePosts(userSelected: User) {
    this.loader = true;
    this.selectedUser = userSelected;
    this.postService.getPostByUserId(userSelected.id)
      .pipe(finalize(() => this.loader = false))
      .subscribe((response) => {
        this.postAppComponentList = response;
      });
  }
}
