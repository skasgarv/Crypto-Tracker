import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GetCoinDataService } from "../get-coin-data.service";

@Component({
  selector: 'app-display-coins',
  templateUrl: './display-coins.component.html',
  styleUrls: ['./display-coins.component.css']
})
export class DisplayCoinsComponent implements OnInit {

  selectedCoins = ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Bitcoin Cash", "Kin"];
  extractData:any;
  fetchedData: boolean = true;
  constructor(
    private getCoinDataService: GetCoinDataService
  ) { }

  ngOnInit() {
    this.viewData();
  }

  viewData() {
    this.getCoinDataService.getData().subscribe(coinData => {
      this.extractData = coinData;
      this.extractData = this.extractData.filter(element => this.selectedCoins.includes(element.name));
      this.fetchedData = false;
    });
  }
}
