import { Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {PostListComponent} from './post-list/post-list.component';

export const AppRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'post/:id', component: PostListComponent }
];
