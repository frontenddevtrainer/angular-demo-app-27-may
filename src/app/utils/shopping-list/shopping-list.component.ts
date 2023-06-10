import {
  style,
  trigger,
  state,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  animations: [
    trigger('fontSizeAnimation', [
      state('small', style({ fontSize: '10px', color: 'red', opacity: 0.5 })),
      state('medium', style({ fontSize: '15px', color: 'green', opacity: 1 })),
      state('large', style({ fontSize: '20px', color: 'blue', opacity: 0.3 })),
      transition('small <=> medium', animate('500ms ease-in')),
      transition('medium <=> large', animate('1500ms ease-out')),
      transition('small <=> large', animate('1000ms ease-in')),
    ]),
    trigger('listItems', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-15px)' }),
            stagger(
              '500ms',
              animate(
                '500ms',
                style({ opacity: 1, transform: 'translateX(0px)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ShoppingListComponent implements OnInit, OnChanges, OnDestroy {

  // user!: UserService;

  itemsInCart: Product[] = [];

  constructor(private user: UserService, private cart: CartService){
    this.itemsInCart = cart.items;
  }

  currentFontAnimationState = 'medium';

  // @Input('items') itemsInCart: Product[] = [];

  @Output() onDelete: EventEmitter<Product> = new EventEmitter();

  deleteProduct(product: Product) {
    this.onDelete.emit(product);
  }

  changeCurrentFontSize(size: string) {
    this.currentFontAnimationState = size;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
