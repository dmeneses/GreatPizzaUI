import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pizza } from '../shared/models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private path = '/api/pizzas';
  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.path);
  }

  getPizza(id: string): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.path}/${id}`);
  }
}
