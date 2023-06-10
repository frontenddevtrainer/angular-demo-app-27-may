import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';

import { FormsModule } from "@angular/forms";
import { FilterDirective } from './filter.directive';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterDirective,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    FormsModule
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: "INR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
