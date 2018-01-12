import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCoinComponent } from "./add-new-coin/add-new-coin.component";
import { DisplayCoinsComponent } from "./display-coins/display-coins.component";

const routes: Routes = [
  { path: '', redirectTo: '/displayCoins', pathMatch: 'full' },
  {path:"addNewCoin", component: AddNewCoinComponent},
  {path:"displayCoins", component: DisplayCoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
