import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: any = [];

  showUsers = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }

  loadUsers() {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    })
  }

  saveSetting() {
    alert("Setting Saved")
  }

}
