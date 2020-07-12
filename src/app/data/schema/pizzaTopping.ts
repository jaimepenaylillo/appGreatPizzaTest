export class PizzaTopping {
  id: number;
  idPizza: number;
  idTopping: number;
}

export class PizzaToppingDetailed extends PizzaTopping {
  toppingName:string;
  pizzaName: string;
}
