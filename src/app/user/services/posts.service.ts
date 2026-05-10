import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';
// import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = `${environment.baseurl}/posts`;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.baseUrl);
  }

  addPost(post: any) {
    return this.http.post(this.baseUrl, post)
  }

  deletePost(id: number) {
    return this.http.delete(`${this.baseUrl}/ ${id}`);
  }

  updatePost(id: number, post: any) {
    return this.http.put(`${this.baseUrl}/${id}`, post)
  }

}
