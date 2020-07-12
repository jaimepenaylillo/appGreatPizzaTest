import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaTopping, PizzaToppingDetailed } from '../schema/pizzaTopping';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class PizzaToppingService {

  constructor(private http: HttpClient, private constants: Constants) { }

  getToppingsFromPizza(idPizza: number): Observable<PizzaToppingDetailed[]> {
    return this.http.get(this.constants.API_ENDPOINT + '/pizzaTopping/' + idPizza)
      .pipe(map((data: any) => {
        console.log(data)
        return data;
      }));
  }

  addToppingToPizza(pizzaTopping: PizzaTopping): Observable<boolean> {
    return this.http.post(this.constants.API_ENDPOINT + '/pizzaTopping', pizzaTopping)
      .pipe(map((data: boolean) => {
        return data;
      }));
  }
}
