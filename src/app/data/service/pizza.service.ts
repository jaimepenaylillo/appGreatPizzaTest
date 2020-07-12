import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../schema/pizza';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient, private constants: Constants) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get(this.constants.API_ENDPOINT + '/pizza/')
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getPizza(id: number): Observable<Pizza> {
    const idParam = JSON.stringify(id);
    return this.http.get(this.constants.API_ENDPOINT + '/pizza/' + idParam)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  addPizza(pizza: Pizza) {
    const pramaJson = JSON.stringify(pizza);
    console.log(pramaJson)
    return this.http.post<Pizza>(this.constants.API_ENDPOINT + '/pizza', pizza);
  }

  deletePizza(idPizza: number): Observable<boolean> {
    const pramaJsonIdPizza = JSON.stringify(idPizza);
    return this.http.delete(this.constants.API_ENDPOINT + '/pizza/' + pramaJsonIdPizza)
      .pipe(map((data: boolean) => {
        return data;
      }));
  }
}
