import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { PizzaService } from '../pizza.service';
import { Pizza } from 'src/app/shared/models/pizza.model';


@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.scss']
})
export class PizzaEditorComponent implements OnInit {

  pizzaId: string;
  pizzaForm = this.formBuilder.group({
    _id: '',
    name: '',
    toppings: this.formBuilder.array([
      this.formBuilder.group({
        _id: '',
        name: ''
      })
    ])
  });

  constructor(private formBuilder: FormBuilder,
    private pizzaService: PizzaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.pizzaId = params.get('id');
        return this.pizzaService.getPizza(this.pizzaId);
      })
    )
    .subscribe((pizza: Pizza) => {
      this.pizzaForm.setValue(pizza);
    })
  }

  get toppings() {
    return this.pizzaForm.get('toppings') as FormArray;
  }
}
