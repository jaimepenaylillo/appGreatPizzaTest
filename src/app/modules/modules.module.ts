import { NgModule } from '@angular/core';

import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';
import { PizzaToppingComponent} from './pizza-topping/pizza-topping.component'
import { ModulesRoutingModule } from './modules-routing.module';

@NgModule({
  imports: [
    ModulesRoutingModule
  ],
  declarations: [
    PizzaComponent,
    ToppingComponent,
    PizzaToppingComponent
  ],
})
export class ModulesModule { }
