import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topping } from 'src/app/data/schema/topping';
import { ToppingService } from 'src/app/data/service/topping.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'gp-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnInit {

  toppingForm: FormGroup;
  toppings$: Observable<Topping[]>; // Entity Topping for ListTopping

  constructor(private formBuilder: FormBuilder, public service: ToppingService) {
    this.toppingForm = this.createToppingGroup();
  }

  ngOnInit(): void {
    this.getToppings();
  }

  createToppingGroup() {
    return this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      name: ['', Validators.required],
    });
  }

  getToppings() {
    this.toppings$ = this.service.getToppings();
  }

  addTopping() {
    const toppingsave = {
      id: null,
      name: this.toppingForm.value.name
    }
     this.service.addTopping(toppingsave)
      .subscribe(ts => {
        console.log('topping result', ts);
        this.getToppings();
        this.revert();
      });
  }

  deleteTopping(topping: Topping) {
    this.service.deleteTopping(topping.id)
      .subscribe(dt => {
        this.getToppings();
        console.log(dt);
      })
  }


  revert(): void {
    // Resets to blank object
    this.toppingForm.reset();
    // Resets to provided model
    this.toppingForm.reset({
      id: 0,
      name: ''
    });
  }

  get f() { return this.toppingForm.controls; }

}
