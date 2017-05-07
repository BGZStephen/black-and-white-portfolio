import { BlackAndWhitePortfolioPage } from './app.po';

describe('black-and-white-portfolio App', () => {
  let page: BlackAndWhitePortfolioPage;

  beforeEach(() => {
    page = new BlackAndWhitePortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
