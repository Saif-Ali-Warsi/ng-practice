import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Subject, BehaviorSubject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit, OnDestroy {

  postTitle = '';

  posts: any[] = [];

  showPost = true;

  filteredPosts: any[] = [];

  private destroy$ = new Subject<void>();

  search$ = new BehaviorSubject<string>('');

  constructor(private postsService: PostsService) { }



  ngOnInit() {
    this.loadPosts();


    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      ).subscribe((searchTerm) => {
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
  }

  togglePost() {
    this.showPost = !this.showPost;
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.search$.next(value);
  }


  loadPosts() {
    this.postsService.getPosts().pipe(
      takeUntil(this.destroy$)).subscribe((post: any) => {
        this.posts = post;
        this.filteredPosts = post;
      })

  }

  addPost() {

    if (!this.postTitle.trim()) return;

    const newPost = {
      title: this.postTitle
    };

    this.postsService.addPost(newPost).pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {

        this.posts.unshift(response);

        this.filteredPosts.unshift(response);

        this.postTitle = '';
      })


  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

}
