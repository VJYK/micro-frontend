import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductRoutingModule } from './product-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProductModule { }
