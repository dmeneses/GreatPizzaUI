import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';

import { Pizza } from 'src/app/shared/models/pizza.model';
import { ToppingService } from 'src/app/topping/topping.service';
import { PizzaService } from '../pizza.service';
import { Topping } from 'src/app/shared/models/topping.model';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.scss']
})
export class PizzaEditorComponent implements OnInit {

  pizzaId: string;
  toppingsById = null;
  availableToppings = null;
  newPizzaMode = false;
  selectedTopping = null;
  pizzaForm = this.formBuilder.group({
    name: '',
    toppings: this.formBuilder.array([])
  });

  constructor(
    private formBuilder: FormBuilder,
    private pizzaService: PizzaService,
    private toppingService: ToppingService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.pizzaId = params.get('id');
        this.newPizzaMode = !this.pizzaId;

        if (this.newPizzaMode) {
          const pizza = new Pizza();
          return forkJoin(
            of(pizza),
            this.toppingService.getToppings()
          );
        } else {
          return forkJoin(
            this.pizzaService.getPizza(this.pizzaId),
            this.toppingService.getToppings()
          );
        }
      })
    )
    .subscribe(([pizza, toppings]) => {
      this.pizzaForm.patchValue(pizza);

      if (!this.newPizzaMode) {
        pizza.toppings
          .forEach((topping) => this.toppings.push(this.formBuilder.group(topping)));
        this.pizzaForm.get('name').disable();
      }

      this.toppingsById = toppings
        .reduce((newToppings, topping: Topping) => {
          newToppings[topping.name] = topping;
          return newToppings;
        }, {});

      this.availableToppings = toppings
        .reduce((newToppings, topping: Topping) => {
          newToppings[topping.name] = null;
          return newToppings;
        }, {});
    });
  }

  get toppings() {
    return this.pizzaForm.get('toppings') as FormArray;
  }

  onAutocomplete(autocompletedItem) {
    this.selectedTopping = this.toppingsById[autocompletedItem];
  }

  onToppingAdd() {
    if (this.newPizzaMode) {
      this.toppings.push(this.formBuilder.group(this.selectedTopping));
    } else {
      this.pizzaService.addToppingToPizza(this.pizzaId, this.selectedTopping._id)
        .subscribe(() => {
          this.toppings.push(this.formBuilder.group(this.selectedTopping));
        });
    }
  }

  onSave() {
    const pizza = this.pizzaForm.value;

    if (pizza.name && pizza.name.trim() !== '' &&
      pizza.toppings && pizza.toppings.length > 0) {

      this.pizzaService.savePizza(pizza)
        .subscribe(() => {
          this.router.navigate(['/pizzas']);
        });
    }
  }

  onDelete(topping: Topping, index: number) {
    this.toppings.controls.splice(index, 1);
    this.pizzaService.deleteToppingFromPizza(this.pizzaId, topping._id)
      .subscribe(() => {});
  }
}
