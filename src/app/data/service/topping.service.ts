import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topping } from '../schema/topping';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants';


@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http: HttpClient, private constants: Constants) { }

  getToppings(): Observable<Topping[]> {
    return this.http.get(this.constants.API_ENDPOINT + '/topping/')
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getTopping(id: number): Observable<Topping> {
    const idParam = JSON.stringify(id);
    return this.http.get(this.constants.API_ENDPOINT + '/topping/' + idParam)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  addTopping(topping: Topping): Observable<boolean> {
    const pramaJson = JSON.stringify(topping);
    return this.http.post(this.constants.API_ENDPOINT + '/topping', pramaJson)
      .pipe(map((data: boolean) => {
        return data;
      }));
  }

  deleteTopping(idTopping: number): Observable<boolean> {
    const pramaJsonIdtopping = JSON.stringify(idTopping);
    return this.http.delete(this.constants.API_ENDPOINT + '/topping/' + pramaJsonIdtopping)
      .pipe(map((data: boolean) => {
        return data;
      }));
  }
}
