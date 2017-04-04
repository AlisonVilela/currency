import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CurrencyService } from '../../service/currency.service';
import { AlertService } from './../../../shared/alert/service/alert.service';

const rates = [
  'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD', 'HRK',
  'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP',
  'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR', 'EUR'
];

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  public currencyBase: string;
  public dateRate: any;
  public AllRates: any;
  public error: any;

  constructor(
    private _currencyService: CurrencyService,
    private _alertService: AlertService
  ) {
    const date = new Date();
    this.currencyBase = 'EUR';
    this.dateRate = { 'year': date.getFullYear(), 'month': date.getMonth() + 1, 'day': date.getDate() };
  }

  ngOnInit() {

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : rates.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));

  filtersClick() {
    this._currencyService.getAllCurrency(this.currencyBase, this.dateRate)
      .subscribe(
        data => {
          this.error = false;
          this.AllRates = data;
          this.AllRates.rates[this.currencyBase] = 1;
        },
        error => {
          this.error = true;
          this._alertService.setAlert(
            {type: 'danger', message: 'Error'}
          );
        },
        () => console.log('Finished')
      );
  }

}
