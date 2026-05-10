import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {


  posts: any = [];

  showPost = false;

  constructor(private postsService: PostsService) { }



  ngOnInit() {
    this.loadPosts();
  }

  togglePost() {
    this.showPost = !this.showPost;
  }


  loadPosts() {
    this.postsService.getPosts().subscribe((post) => {
      this.posts = post;
    })
  }

}
