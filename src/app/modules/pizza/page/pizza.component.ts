import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/data/schema/pizza';
import { PizzaService } from 'src/app/data/service/pizza.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gp-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzaForm: FormGroup;
  pizzas$: Observable<Pizza[]>; // Entity Pizzas for ListPizza

  constructor(private formBuilder: FormBuilder, public service: PizzaService) {
    this.pizzaForm = this.createPizzaGroup();
  }

  ngOnInit(): void {
    this.getPizzas();
  }

  createPizzaGroup() {
    return this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      name: ['', Validators.required],
    });
  }

  getPizzas() {
    this.pizzas$ = this.service.getPizzas();
  }

  addPizza() {
    const pizzasave = {
      id: null,
      name: this.pizzaForm.value.name
    }
     this.service.addPizza(pizzasave)
      .subscribe(ps => {
        console.log('pizza result', ps);
        this.getPizzas();
        this.revert();
      });
  }

  deletePizza(pizza: Pizza) {
    this.service.deletePizza(pizza.id)
      .subscribe(dp => {
        this.getPizzas();
        console.log(dp);
      })
  }


  revert(): void {
    // Resets to blank object
    this.pizzaForm.reset();
    // Resets to provided model
    this.pizzaForm.reset({
      id: 0,
      name: ''
    });
  }

  get f() { return this.pizzaForm.controls; }

}
