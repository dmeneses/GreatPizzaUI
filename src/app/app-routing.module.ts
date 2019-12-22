import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'toppings', component: ToppingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
