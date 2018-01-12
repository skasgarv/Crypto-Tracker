import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewCoinComponent } from './add-new-coin/add-new-coin.component';
import { AppRoutingModule } from './/app-routing.module';
import { DisplayCoinsComponent } from './display-coins/display-coins.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddNewCoinComponent,
    DisplayCoinsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
