import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PizzaComponent,
    ToppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
