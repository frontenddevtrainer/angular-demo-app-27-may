import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from './shopping-list/shopping-list.component'


@NgModule({
  declarations: [
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ShoppingListComponent
  ]
})
export class UtilsModule { }
