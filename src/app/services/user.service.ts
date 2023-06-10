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

  // GET /users read > [ {}, {} ]
  // GET /users/:params ex: /users/1 > {}
  // POST /users create > { id: 1 }
  // PUT or PATCH /users/:params update ex: /users/1
  // DELETE /user/:params, ex: /users/1

  // CRUD > POST GET PUT OR PATCH DELETE

  addNewUser(username: string){
    return this.http.post(this.config.URLS.users, { username: username })
  }

  getUserListing(){
    return this.http.get<User[]>(this.config.URLS.users);
  }

  isLoggedIn: boolean = false;
  
}
