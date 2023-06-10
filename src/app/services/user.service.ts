import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private config: ConfigService, private http: HttpClient) { }

  getUsers(){
      this.http.get<User[]>(this.config.URLS.users).subscribe((users)=>{
        this.users.next(users)
      })
  }

  getUserListing(){
    return this.http.get<User[]>(this.config.URLS.users);
  }

  isLoggedIn: boolean = false;
  
}
