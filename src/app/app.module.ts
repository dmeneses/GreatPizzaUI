import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';
import { PizzaEditorComponent } from './pizza/pizza-editor/pizza-editor.component';
import { TopppingEditorComponent } from './topping/toppping-editor/toppping-editor.component';
import { AutocompleteDirective } from './shared/directives/autocomplete/autocomplete.directive';
import { SidenavDirective } from './shared/directives/sidenav/sidenav.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PizzaComponent,
    ToppingComponent,
    PizzaEditorComponent,
    TopppingEditorComponent,
    AutocompleteDirective,
    SidenavDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
