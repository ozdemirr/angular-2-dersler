import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'simple-form',
  template: `<ul>
  <li *ngFor="let post of posts">
      <h4>{{ post.title }}</h4>
      <p>{{post.body}}</p>
  </li>
  </ul>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }
}

