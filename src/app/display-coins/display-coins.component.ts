import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-display-coins',
  templateUrl: './display-coins.component.html',
  styleUrls: ['./display-coins.component.css']
})
export class DisplayCoinsComponent implements OnInit {

  selectedCoins = ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Bitcoin Cash", "Kin"];
  extractData:any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.viewData();
  }

  getData():Observable<any[]> {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/')
        .map(res => res.json());
  }

  viewData() {
    this.getData().subscribe(coinData => {
      this.extractData = coinData;
      this.extractData = this.extractData.filter(element => this.selectedCoins.includes(element.name));
      console.log(this.extractData);
    });
  }

}
