import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ToppingComponent } from './topping/topping.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },

  {
    path: 'pizza',
    component: PizzaComponent
  },

  {
    path: 'topping',
    component: ToppingComponent
  },

  {
    path: 'pizzaTopping',
    component: PizzaToppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModulesRoutingModule { }
