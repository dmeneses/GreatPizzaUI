import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Topping } from '../shared/models/topping.model';
import { ToppingService } from './topping.service';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnInit {

  toppings: Topping[] = [];

  constructor(private toppingService: ToppingService, private router: Router) { }

  ngOnInit() {
    this.loadToppings();
  }

  loadToppings() {
    this.toppingService.getToppings()
      .subscribe((toppings: Topping[]) => this.toppings = toppings);
  }

  onEdit(id: string) {
    this.router.navigate(['topping', id]);
  }

  onDelete(id: string) {
    this.toppingService.deleteTopping(id)
      .subscribe(() => {
        this.loadToppings();
      });
  }

  onAdd(id: string) {
    this.router.navigate(['topping']);
  }

}
