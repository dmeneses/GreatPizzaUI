import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pizza } from '../shared/models/pizza.model';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(
    private pizzaService: PizzaService,
    private router: Router) { }

  ngOnInit() {
    this.loadPizzas();
  }

  loadPizzas() {
    this.pizzaService.getPizzas()
      .subscribe((pizzas: Pizza[]) => this.pizzas = pizzas);
  }

  onEdit(id: string) {
    this.router.navigate(['pizzas', id]);
  }

  onDelete(id: string) {
    this.pizzaService.deletePizza(id)
      .subscribe(() => {
        this.loadPizzas();
      });
  }

  onAdd() {
    this.router.navigate(['pizza']);
  }
}
