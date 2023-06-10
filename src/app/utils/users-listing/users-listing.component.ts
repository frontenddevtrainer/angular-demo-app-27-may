import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss'],
})
export class UsersListingComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {
    this.userService.users.subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }


}
