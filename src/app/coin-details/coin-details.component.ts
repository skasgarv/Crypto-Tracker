import { Component, OnInit, Input } from '@angular/core';
import { GetCoinDataService } from "../get-coin-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  coinName: string;
  coinDetail: any;
  constructor(
    private getCoinData: GetCoinDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
     // gets coin name on templateUrl change
     this.route.params.subscribe(params => {
       this.coinName = params['coinName'];
       this.coinDetails();
    });
  }

  coinDetails() {
    this.getCoinData.getData().subscribe(individualCoin => {
      this.coinDetail = individualCoin.filter(element => this.coinName === (element.name));
    });
  }
}
