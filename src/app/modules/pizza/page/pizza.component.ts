import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'gp-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzaForm: FormGroup;
  constructor() {
    this.pizzaForm = this.createPizzaGroup();
  }

  ngOnInit(): void {
  }

  createPizzaGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })
  }

  onSubmit() {

  }

  revert(): void{
    // Resets to blank object
    this.pizzaForm.reset();

    // Resets to provided model
    this.pizzaForm.reset({
      id: 0,
      name: '' });
  }

}
