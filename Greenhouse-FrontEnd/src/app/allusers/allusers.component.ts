import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {UserService} from "../service/user.service";
import {User} from "./User";
import {AlertifyService} from "../service/alertify.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-allusers',
  standalone: true,
  imports: [
    SidebarComponent,
    NgForOf
  ],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css'
})

export class AllusersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  deleteUser(username: string): void {
    if (confirm(`Are you sure you want to delete user '${username}'?`)) {
      this.userService.deleteUser(username).subscribe(
        () => {
          this.alertify.success(`User '${username}' deleted successfully`);
          // After deletion, reload the user list
          this.loadUsers();
        },
        error => {
          console.error('Error deleting user', error);
          this.alertify.error(`Error deleting user '${username}'`);
        }
      );
    }
  }

  protected readonly localStorage = localStorage;
}
