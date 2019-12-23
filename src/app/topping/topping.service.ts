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

  getTopping(id: string): Observable<Topping> {
    return this.http.get<Topping>(`${this.path}/${id}`);
  }

  deleteTopping(id: string): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }

  saveTopping(topping: Topping): Observable<any> {
    return this.http.post<any>(`${this.path}`, topping);
  }
}
