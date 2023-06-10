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
  isBold = false;
  isItalic = false;

  searchText: string = "";

  latestProducts: Product[] = [];

  randomNumber: string = "";

  productCategories = 'car'; // car, phone, television, laptop

  fontSize = 10;

  textStyle = { 'fontSize.px': this.fontSize };
  textClass = { 'bold-text': this.isBold, 'italic-text': this.isItalic };

  dummyContent = "This is demo content";

  currentTime = new Date();

  constructor(private products: ProductsService, private user: UserService) {
    this.latestProducts = this.products.latestProducts;
  }

  productsAddedToCart: Product[] = [];

  onProductSelect(product: Product) {
    console.log(product);
    this.productsAddedToCart.push(product);
  }

  onCartDeleteItem(product: Product) {
    // this.itemsInCart = this.itemsInCart.filter((curr) => {
    //   return curr.id != product.id;
    // });
  }

  increaseFontSize() {
    this.fontSize++;
    this.textStyle['fontSize.px'] = this.fontSize;
  }

  decreaseFontSize() {
    this.fontSize--;
    this.textStyle['fontSize.px'] = this.fontSize;
  }

  makeItalic() {
    this.isItalic = !this.isItalic;
    this.textClass['italic-text'] = this.isItalic;
  }

  makeBold() {
    this.isBold = !this.isBold;
    this.textClass['bold-text'] = this.isBold;
  }

  makeRegular() {
    this.isBold = false;
    this.isItalic = false;
  }

  changeProductName(index: number){
      // this.itemsInCart[index].name = Math.random().toString();
  }

  showRandomNumber(){
    this.randomNumber = Math.random().toString();
  }
    
}
