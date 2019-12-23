import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';
import { PizzaEditorComponent } from './pizza/pizza-editor/pizza-editor.component';
import { TopppingEditorComponent } from './topping/toppping-editor/toppping-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'pizza', component: PizzaEditorComponent },
  { path: 'pizzas/:id', component: PizzaEditorComponent },
  { path: 'toppings', component: ToppingComponent },
  { path: 'topping/:id', component: TopppingEditorComponent },
  { path: 'topping', component: TopppingEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
