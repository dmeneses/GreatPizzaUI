import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Topping } from '../shared/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  private path = '/api/toppings';
  constructor(private http: HttpClient) { }

  getToppings(): Observable<Topping[]> {
    return this.http.get<Topping[]>(this.path);
  }
}