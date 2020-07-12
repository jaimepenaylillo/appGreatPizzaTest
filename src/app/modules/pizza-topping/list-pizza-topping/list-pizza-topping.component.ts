import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PizzaToppingDetailed } from 'src/app/data/schema/pizzaTopping';
import { Observable } from 'rxjs';

@Component({
  selector: 'gp-list-pizza-topping',
  templateUrl: './list-pizza-topping.component.html',
  styleUrls: ['./list-pizza-topping.component.scss']
})
export class ListPizzaToppingComponent implements OnInit {

  @Input() toppingsFromPizza$:  Observable<PizzaToppingDetailed[]>;

  page = 1;
  pageSize = 1;
  collectionSize: number;

  constructor() { }

  ngOnInit(): void {
  }

}
