import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './user/components/users/users.component';
import { PostsComponent } from './user/components/posts/posts.component';
import { OutlinedBtnComponent } from './user/components/outlined-btn/outlined-btn.component';
import { EmployeesService } from './user/services/employees.service';
import { RatingsFormComponent } from './user/components/posts/ratings-form/ratings-form.component';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, PostsComponent, OutlinedBtnComponent, RatingsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private empService: EmployeesService) { }

  sendMessage(message: string) {
    alert(message)
  }

  ngOnInit(): void {
    console.log(this.empService.getEmployee());

    of(1, 2, 3)
      .pipe(
        map(value => value * 2)
      )
      .subscribe(data => console.log(data));
  }

}
