import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    itemsInCart : Product[] = [];
    constructor(private cart: CartService){
        this.itemsInCart = cart.items;
    }

}
