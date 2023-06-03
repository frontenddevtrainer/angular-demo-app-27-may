import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
  ]
})
export class UtilsModule { }
