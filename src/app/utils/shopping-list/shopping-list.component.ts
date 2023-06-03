import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {


  @Input() items: Product[] = [];

}
