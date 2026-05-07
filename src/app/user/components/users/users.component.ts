import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService) { }



  ngOnInit() {
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    })
  }

}
