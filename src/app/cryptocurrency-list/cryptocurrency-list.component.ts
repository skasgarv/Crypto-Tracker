import { Component, OnInit } from '@angular/core';

import { GetCoinDataService } from "../get-coin-data.service";

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.css']
})
export class CryptocurrencyListComponent implements OnInit {

  coinList: any = [];
  constructor(private getCoinData: GetCoinDataService) { }

  ngOnInit() {
    this.getCoinData.getData().subscribe(coinData => {
      this.coinList = coinData;
      console.log(this.coinList);
    });
  }

}
