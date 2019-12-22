import { Component, OnInit } from '@angular/core';

import { Pizza } from '../shared/models/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  //TODO: Load data with a service
  pizzas: Pizza[] = [
    {name: 'pizza 1', shortDescription: 'some pizza', imageUrl: 'assets/images/pizza-example.png'}, 
    {name: 'pizza 2', shortDescription: 'some pizza', imageUrl: 'assets/images/pizza-example.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
