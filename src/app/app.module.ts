import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';


import { PizzaToppingService } from './data/service/pizza-topping.service';
import { Constants } from './core/constants';
import { PizzaService } from './data/service/pizza.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [PizzaToppingService, PizzaService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
