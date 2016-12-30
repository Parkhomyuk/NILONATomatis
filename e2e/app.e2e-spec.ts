import { NILONATomatisPage } from './app.po';

describe('nilonatomatis App', function() {
  let page: NILONATomatisPage;

  beforeEach(() => {
    page = new NILONATomatisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
