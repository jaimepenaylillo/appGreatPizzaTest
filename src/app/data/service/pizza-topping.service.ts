import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaTopping } from '../schema/pizzaTopping';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class PizzaToppingService {

  constructor(private http: HttpClient, private constants: Constants) { }

  getToppingsFromPizza(idPizza: number): Observable<PizzaTopping[]> {
    const idPizzaParam = JSON.stringify(idPizza);
    return this.http.get(this.constants.API_ENDPOINT + '/pizzaTopping/' + idPizzaParam)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  addToppingToPizza(pizzaTopping: PizzaTopping): Observable<boolean> {
    const pramaJson = JSON.stringify(pizzaTopping);
    return this.http.post(this.constants.API_ENDPOINT + '/pizzaTopping', pramaJson)
      .pipe(map((data: boolean) => {
        return data;
      }));
  }
}
