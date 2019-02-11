import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {Post} from '../models/Post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input()
  userPost: User;
  @Input()
  postList: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {}


}
