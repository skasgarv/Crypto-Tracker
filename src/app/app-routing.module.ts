import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCoinComponent } from "./add-new-coin/add-new-coin.component";
import { DisplayCoinsComponent } from "./display-coins/display-coins.component";
import { CoinDetailsComponent } from "./coin-details/coin-details.component";
import { CryptocurrencyListComponent } from "./cryptocurrency-list/cryptocurrency-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/displayCoins', pathMatch: 'full' },
  {path:"addNewCoin", component: AddNewCoinComponent},
  {path:"coinDetails/:coinName", component: CoinDetailsComponent},
  {path:"displayCoins", component: DisplayCoinsComponent},
  {path:"cryptocurrenciesList", component: CryptocurrencyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
