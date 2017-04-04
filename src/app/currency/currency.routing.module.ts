import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ConverterComponent } from './component/convert/converter.component';
import { WorldComponent } from './component/world/world.component';

const currencyRoutes: Routes = [
  { path: 'currency', children: [
    { path: 'converter', component: ConverterComponent},
    { path: 'world', component: WorldComponent}
  ]},
  { path: '', redirectTo: 'currency/converter', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(currencyRoutes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
