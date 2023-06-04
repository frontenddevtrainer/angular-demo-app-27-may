import { Component } from '@angular/core';
import { Product } from './interfaces/products.interface';
import { ProductsService } from '../app/services/products.service';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  latestProducts: Product[] = [];

  productCategories = "car"; // car, phone, television, laptop

  itemsInCart: Product[] = [
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
    },{
      id: 4,
      description: 'Hello World!!!',
      name: 'New Product 2',
      price: 10.0,
      thumbnail: '',
    },{
      id: 5,
      description: 'Hello World!!!',
      name: 'New Product 2',
      price: 10.0,
      thumbnail: '',
    },
  ];

  constructor(private products: ProductsService, private user: UserService) {
    this.latestProducts = this.products.latestProducts;
  }

  productsAddedToCart: Product[] = [];

  onProductSelect(product: Product) {
    console.log(product);
    this.productsAddedToCart.push(product);
  }

  onCartDeleteItem(product: Product) {
    this.itemsInCart = this.itemsInCart.filter((curr)=>{
        return curr.id != product.id
    })
  }
}
