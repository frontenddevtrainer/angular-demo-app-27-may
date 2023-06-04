import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ShoppingListComponent,
    HighlightDirective,
    ReversePipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports : [
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ShoppingListComponent,
    HighlightDirective,
    ReversePipe,
    FilterPipe
  ]
})
export class UtilsModule { }
