import { NgModule } from '@angular/core';
import { PizzaComponent } from './pizza/page/pizza.component';
import { ToppingComponent } from './topping/page/topping.component';
import { PizzaToppingComponent} from './pizza-topping/page/pizza-topping.component'
import { ModulesRoutingModule } from './modules-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { ListToppingComponent } from './topping/list-topping/list-topping.component';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { ListPizzaToppingComponent } from './pizza-topping/list-pizza-topping/list-pizza-topping.component'

@NgModule({
  imports: [
    ModulesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PizzaComponent,
    ToppingComponent,
    PizzaToppingComponent,
    ListToppingComponent,
    ListPizzaToppingComponent,
    ListPizzaComponent,
    ListPizzaToppingComponent,
    ListToppingComponent
  ],
})
export class ModulesModule { }
