import { ProjemPage } from './app.po';

describe('projem App', function() {
  let page: ProjemPage;

  beforeEach(() => {
    page = new ProjemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
