import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {DataModule} from '../data/data.module'

import { PizzaComponent } from './pizza/page/pizza.component';
import { ToppingComponent } from './topping/page/topping.component';
import { PizzaToppingComponent} from './pizza-topping/page/pizza-topping.component'
import { ModulesRoutingModule } from './modules-routing.module';



import { ListToppingComponent } from './topping/list-topping/list-topping.component';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { ListPizzaToppingComponent } from './pizza-topping/list-pizza-topping/list-pizza-topping.component'
import { PizzaService } from '../data/service/pizza.service';

@NgModule({
  imports: [
    ModulesRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    DataModule,
    HttpClientModule
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
  providers: [PizzaService],
})
export class ModulesModule { }
