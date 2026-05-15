import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './user/components/users/users.component';
import { PostsComponent } from './user/components/posts/posts.component';
import { OutlinedBtnComponent } from './user/components/outlined-btn/outlined-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, PostsComponent, OutlinedBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  sendMessage(message: string) {
    alert(message)
  }
}
