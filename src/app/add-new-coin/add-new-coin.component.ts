import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-coin',
  templateUrl: './add-new-coin.component.html',
  styleUrls: ['./add-new-coin.component.css']
})
export class AddNewCoinComponent implements OnInit {
  coin: any = {
    name:"",
    amount:"",
    dollarValue:"",
    currentValue:""
  }
  constructor() { }

  ngOnInit() {
  }

  submitCoinData(coin) {
    console.log("Data Submitted", this.coin)
  }

}
