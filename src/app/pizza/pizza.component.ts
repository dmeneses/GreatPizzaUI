import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzas = [
    {name: 'pizza 1', shortDescription: 'some pizza', imageUrl: 'assets/images/pizza-example.png'}, 
    {name: 'pizza 2', shortDescription: 'some pizza', imageUrl: 'assets/images/pizza-example.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
