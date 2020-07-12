import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topping } from 'src/app/data/schema/topping';
import { Observable } from 'rxjs';

@Component({
  selector: 'gp-list-topping',
  templateUrl: './list-topping.component.html',
  styleUrls: ['./list-topping.component.scss']
})
export class ListToppingComponent implements OnInit {
  @Input() toppings$:  Observable<Topping[]>;
  @Output() deleteTopping =  new EventEmitter<Topping>();

  page = 1;
  pageSize = 1;
  collectionSize: number;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTopping(topping: Topping){
    this.deleteTopping.emit(topping);
   }

}

