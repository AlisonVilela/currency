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
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  public currencyA: string;
  public currencyB: string;
  public currencyCurrent: string;
  public value: number;
  public result: number;
  public error: any;

  constructor(
    private _currencyService: CurrencyService,
    private _alertService: AlertService
  ) {
    this.currencyA = 'EUR';
    this.currencyB = 'BRL';
    this.value = 1;
  }

  ngOnInit() {

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : rates.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));

  converterClick() {
    this._currencyService.getConvertCurrency(this.currencyA, this.currencyB)
      .subscribe(
        data => {
          this.result = ((this.currencyB === 'EUR' ? 1 : data.rates[this.currencyB]) *
          this.value / (this.currencyA === 'EUR' ? 1 : data.rates[this.currencyA]));
          if (isNaN(this.result)) {
            this.error = true;
            this._alertService.setAlert(
              {type: 'danger', message: 'Error'}
            );
            this.result = 0;
          } else {
            this.error = false;
            this.currencyCurrent = this.currencyB;
          }
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

  inverter() {
    let Aux: string;
    Aux = this.currencyA;
    this.currencyA = this.currencyB;
    this.currencyB = Aux;
  }
}
