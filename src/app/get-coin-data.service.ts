import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetCoinDataService {

  constructor(private http: Http) { }

  getData():Observable<any[]> {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/')
        .map(res => res.json());
  }
}
