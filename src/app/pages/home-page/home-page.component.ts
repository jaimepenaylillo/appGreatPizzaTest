import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/data/service/pizza.service';
import { PizzaToppingService } from 'src/app/data/service/pizza-topping.service';
import { MenuPizzas } from './homeSchema';
import { pipe } from 'rxjs';

@Component({
  selector: 'gp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  menuPizzas: MenuPizzas[] = [];
  constructor(
    private pizzaToppingService: PizzaToppingService,
    private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas()
    .subscribe(p => {
      p.forEach(elementPizza => {
          this.pizzaToppingService.getToppingsFromPizza(elementPizza.id)
          .subscribe(pt => {
            const toMenu: MenuPizzas = {
              pizzaName: elementPizza.name,
              toppings: pt.map( list => {
                return {nameTopping: list.toppingName}
                 })
            }
            console.log(toMenu)
            this.menuPizzas.push(toMenu);
          });
      });
    })

  }

}
