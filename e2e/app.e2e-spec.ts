import { CurrencyConverterPage } from './app.po';

describe('currency-converter App', () => {
  let page: CurrencyConverterPage;

  beforeEach(() => {
    page = new CurrencyConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
