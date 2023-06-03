import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: "INR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
