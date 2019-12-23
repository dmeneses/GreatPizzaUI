import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';
import { PizzaEditorComponent } from './pizza/pizza-editor/pizza-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'pizzas/:id', component: PizzaEditorComponent },
  { path: 'toppings', component: ToppingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
