import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {

  constructor(private _http: Http) { }

  getConvertCurrency(CurrencyA, CurrencyB) {
    return this._http.get(`http://api.fixer.io/latest?symbols=${CurrencyA},${CurrencyB}`)
      .map(res => res.json());
  }

  getAllCurrency(CurrencyBase, date) {
    return this._http.get(`http://api.fixer.io/${date.year}-${date.month > 10 ? date.month : '0' +
    date.month}-${date.day > 10 ? date.day : '0' + date.day}?base=${CurrencyBase}`)
      .map(res => res.json());
  }
}
