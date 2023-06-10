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
  username: string = "";
  isLoading = false;

  constructor(private userService: UserService) {
    this.userService.users.subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  saveUser(){
    this.isLoading = true;
    this.userService.addNewUser(this.username).subscribe(()=>{
      console.log("Added user.");
      this.isLoading = false;
      this.userService.getUsers();
    }, (error)=>{
      this.isLoading = false;
      console.log(error);
    });
  }

}
