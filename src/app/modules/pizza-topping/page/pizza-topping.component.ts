import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaTopping } from 'src/app/data/schema/pizzaTopping';
import { PizzaToppingDetailed } from 'src/app/data/schema/pizzaTopping';
import { PizzaToppingService } from 'src/app/data/service/pizza-topping.service';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/data/schema/pizza';
import { Topping } from 'src/app/data/schema/topping';
import { PizzaService } from 'src/app/data/service/pizza.service';
import { ToppingService } from 'src/app/data/service/topping.service';

@Component({
  selector: 'gp-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.scss']
})
export class PizzaToppingComponent implements OnInit {
  // Entities to fill Pizza & Topping Dropdows
  pizzas: Pizza[] = [];
  toppings: Topping[] = [];

  pizzaToppingForm: FormGroup;
  toppingsFromPizza$: Observable<PizzaToppingDetailed[]>; // Entity Pizza Topping for ListPizzaTopping

  constructor(
    private formBuilder: FormBuilder,
    public service: PizzaToppingService,
    private pizzaService: PizzaService,
    private toppingService: ToppingService
    ) {
    this.pizzaToppingForm = this.createPizzaToppingGroup();
    this.getPizzas();
    this.getToppings();
  }

  ngOnInit(): void {
  }

  createPizzaToppingGroup() {
    return this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      idPizza: [0, Validators.required],
      idTopping: [0, Validators.required],
    });
  }

  getToppingFromPizza(idPizza: number) {
    this.toppingsFromPizza$ = this.service.getToppingsFromPizza(idPizza);
  }

  addToppingToPizza() {
    const toppingToPizzaSave = {
      id: null,
      idPizza: this.pizzaToppingForm.value.idPizza,
      idTopping: this.pizzaToppingForm.value.idTopping,
    }
     this.service.addToppingToPizza(toppingToPizzaSave)
      .subscribe(pts => {
        console.log('ToppingToPizza', pts);
        this.getToppingFromPizza(toppingToPizzaSave.idPizza);
        this.revert();
      });
  }

  revert(): void {
    // Resets to blank object
    this.pizzaToppingForm.reset();
    // Resets to provided model
    this.pizzaToppingForm.reset({
      id: 0,
      idPizza: 0,
      idTopping: 0
    });
  }

  getPizzas() {
    this.pizzaService.getPizzas()
    .subscribe(p => {
      this.pizzas = p;
    })
  }

  getToppings() {
    this.toppingService.getToppings()
    .subscribe(t => {
      this.toppings = t;
    })
  }

  ddlPizzaChanged(e) {
    console.log(e.target.value);
    this.getToppingFromPizza(e.target.value);
  }

  get f() { return this.pizzaToppingForm.controls; }

}
