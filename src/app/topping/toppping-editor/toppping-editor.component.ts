import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Topping } from 'src/app/shared/models/topping.model';
import { of } from 'rxjs';
import { ToppingService } from '../topping.service';

@Component({
  selector: 'app-toppping-editor',
  templateUrl: './toppping-editor.component.html',
  styleUrls: ['./toppping-editor.component.scss']
})
export class TopppingEditorComponent implements OnInit {

  toppingId: string;
  newToppingMode = false;
  toppingForm = this.formBuilder.group({
    _id: '',
    name: ''
  });

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toppingService: ToppingService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.toppingId = params.get('id');
        this.newToppingMode = !this.toppingId;
        if (this.newToppingMode) {
          const topping = new Topping();
          return of(topping);
        } else {
          return this.toppingService.getTopping(this.toppingId);
        }
      })
    )
    .subscribe((topping) => {
      this.toppingForm.patchValue(topping);
    })
  }

  onSave() {
    const topping = this.toppingForm.value;
    this.toppingService.saveTopping(topping)
      .subscribe(() => {
        this.router.navigate(['/toppings']);
      });
  }

}
