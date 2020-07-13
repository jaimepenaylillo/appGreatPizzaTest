# AppGreatPizza (Front End)
## The Great Pizza Test: Description.
- This is an application to manage Pizza Menu, the application has a list of pizzas described, that has a Pizza name and a List of Ingredients (Home Page).
  - The Application has a list of ingredients (Toppings), and the ability to add, edit, and delete these ingredients. (Menu Option toppings).
  - The application allows the user to create new Pizzas, delete old (Menu Option Pizzas)
  - Change the ingredient list of an existing Pizza (Menu Option Topping for Pizzas).
  
 ## The Great Pizza Test: Technical Details.
 - This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.
 - Used also, ngx-bootstrap, HTML/HTML5, CSS3, rxjs, a and other Libraries, if you need more description information, you can see into package.json, to check versions and other deatils.
 - Back end is available in  https://github.com/jaimepenaylillo/APIGreatPizza, this back end has been developped using Node.js, "cors": "^2.8.5","express": "^4.17.1", "mysql": "^2.18.1", detailed information would be find in the readme.ms file of that project.
 
 ## The Great Pizza Test: Verb/Noun.
 - Nouns: Has been found, 3 Pizza, Topping, PizzaTopping (Table that establish a relation bettween Pizza and Toppings) 
 - Verbs: Suggested for the design document:
      1.	getPizzas.
      2.	getpizza.
      3.	GetToppings.
      4.	AddTopping.
      5.	DeleteTopping.
      6.	DeletePizza.
      7.	addPizza.
      8.	addToppingToPizza.
      9.	getToppingsForPizza.

## The Great Pizza Test: Design Paterns. 
Here is mention only 2 example of design paterns, there are another in this application. 
- ###Behavioral design patterns: 
    ### Iterator: (Traverse elements of a collection whitout exposing it's)
         Some of the screens populate binding data to controls using  "*ngFor="let pizza of pizzas$"",  "p.forEach(elementPizza => {..."
    ### Observer  publish/subscribe:
         Services in the application contains Observable in order to pass data from httpClient, to components there are used methods thats subscribe those.


 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
