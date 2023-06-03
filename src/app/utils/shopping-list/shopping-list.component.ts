import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {


  @Input("items") itemsInCart: Product[] = [];
  

  @Output() onDelete: EventEmitter<Product> = new EventEmitter();

  deleteProduct(product: Product){
    this.onDelete.emit(product)
  }

}
