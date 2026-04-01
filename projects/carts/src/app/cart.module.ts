import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartRoutingModule } from './cart-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CartModule { }
