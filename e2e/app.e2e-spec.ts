import { SalaryCalculatorAppPage } from './app.po';

describe('salary-calculator-app App', function() {
  let page: SalaryCalculatorAppPage;

  beforeEach(() => {
    page = new SalaryCalculatorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
