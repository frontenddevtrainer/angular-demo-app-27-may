import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  URLS = {
    users: 'https://jsonplaceholder.typicode.com/users',
  };

  constructor() {}
}
