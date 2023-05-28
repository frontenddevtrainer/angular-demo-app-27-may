import { Component } from '@angular/core';
import { Product } from './interfaces/products.interface';
import { ProductsService } from "../app/services/products.service";
import { UserService } from "../app/services/user.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  latestProducts: Product[] = [];

  constructor(private products: ProductsService, private user: UserService){
      this.latestProducts = this.products.latestProducts
  }

  productsAddedToCart: Product[] = [];

  onProductSelect(product: Product){
    console.log(product);
    this.productsAddedToCart.push(product);
  }

}
