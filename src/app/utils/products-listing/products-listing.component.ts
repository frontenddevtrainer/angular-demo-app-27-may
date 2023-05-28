import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent {

  @Input() products: Product[] = [];
  @Input() color: string = "blue";

  @Output() onSelect : EventEmitter<Product> = new EventEmitter();

  addToCart(product: Product){
    this.onSelect.emit(product);
  }

}
