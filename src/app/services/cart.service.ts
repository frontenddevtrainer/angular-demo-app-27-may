import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: Product[] = [
    {
      id: 1,
      description: 'Hello World!!!',
      name: 'New Product 1',
      price: 10.0,
      thumbnail: '',
    },
    {
      id: 2,
      description: 'Hello World!!!',
      name: 'New Product 2',
      price: 10.0,
      thumbnail: '',
    },
    {
      id: 3,
      description: 'Hello World!!!',
      name: 'New Product 2',
      price: 10.0,
      thumbnail: '',
    },
    {
      id: 4,
      description: 'Hello World!!!',
      name: 'New Product 2',
      price: 10.0,
      thumbnail: '',
    },
    {
      id: 5,
      description: 'Hello World!!!',
      name: 'New Product 2',
      price: 10.0,
      thumbnail: '',
    },
  ];
}
