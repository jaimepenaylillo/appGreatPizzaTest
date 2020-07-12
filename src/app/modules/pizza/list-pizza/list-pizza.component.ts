import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Pizza } from 'src/app/data/schema/pizza';
import { Observable } from 'rxjs';


@Component({
  selector: 'gp-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
  @Input() pizzas$:  Observable<Pizza[]>;
  @Output() deletePizza =  new EventEmitter<Pizza>();

  page = 1;
  pageSize = 1;
  collectionSize: number;

  constructor( ) { }

  ngOnInit(): void {
  }

  onDeletePizza(pizza: Pizza){
    this.deletePizza.emit(pizza);
   }

}
