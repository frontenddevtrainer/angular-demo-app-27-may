import {
  style,
  trigger,
  state,
  transition,
  animate,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  animations: [
    trigger('fontSizeAnimation', [
      state('small', style({ fontSize: '10px', color: "red", opacity: 0.5 })),
      state('medium', style({ fontSize: '15px', color: "green", opacity: 1  })),
      state('large', style({ fontSize: '20px', color: "blue", opacity: 0.3 })),
      transition('small <=> medium', animate('500ms ease-in')),
      transition('medium <=> large', animate('1500ms ease-out')),
      transition('small <=> large', animate('1000ms ease-in')),
    ]),
  ],
})
export class ShoppingListComponent {
  currentFontAnimationState = 'small';

  @Input('items') itemsInCart: Product[] = [];

  @Output() onDelete: EventEmitter<Product> = new EventEmitter();

  deleteProduct(product: Product) {
    this.onDelete.emit(product);
  }

  changeCurrentFontSize(size: string) {
    this.currentFontAnimationState = size;
  }
}
