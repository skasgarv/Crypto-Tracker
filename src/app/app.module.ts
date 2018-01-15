import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewCoinComponent } from './add-new-coin/add-new-coin.component';
import { AppRoutingModule } from './/app-routing.module';
import { DisplayCoinsComponent } from './display-coins/display-coins.component';
import { GetCoinDataService } from "./get-coin-data.service";
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddNewCoinComponent,
    DisplayCoinsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [GetCoinDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
