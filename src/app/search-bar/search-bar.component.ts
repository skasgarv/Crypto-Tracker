import {Component, ViewChild, OnInit} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { GetCoinDataService } from "../get-coin-data.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  allCoins: string[] = [];

  constructor(private getcoindata: GetCoinDataService) { }

  ngOnInit() {
    this.getcoindata.getData().subscribe(coinData => {
      coinData.forEach(individualCoin => {
        if(this.allCoins.indexOf(individualCoin.name)== -1) {
          this.allCoins.push(individualCoin.name)
        }
      });
    });
  }

  public coinName: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.allCoins.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
}
