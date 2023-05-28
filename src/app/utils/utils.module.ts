import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListingComponent } from './products-listing/products-listing.component';



@NgModule({
  declarations: [
    ProductsListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ProductsListingComponent
  ]
})
export class UtilsModule { }
