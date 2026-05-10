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

  users: any[] = [];

  filteredUsers: any[] = [];

  showUsers = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }


  onSearch(event: any) {
    const value = event.target.value.toLowerCase();

    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(value));
  }


  loadUsers() {
    this.userService.getUsers().subscribe((user: any) => {
      this.users = user;

      this.filteredUsers = user;
    })


  }

  saveSetting() {
    alert("Setting Saved")
  }

}
