import { Component, OnInit } from '@angular/core';

import { Topping } from '../shared/models/topping.model';
import { ToppingService } from './topping.service';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnInit {

  toppings: Topping[] = [];

  constructor(private toppingService: ToppingService) { }

  ngOnInit() {
    this.toppingService.getToppings()
      .subscribe((toppings: Topping[]) => this.toppings = toppings);
  }

}
