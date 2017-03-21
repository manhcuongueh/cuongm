import { CuongmPage } from './app.po';

describe('cuongm App', function() {
  let page: CuongmPage;

  beforeEach(() => {
    page = new CuongmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
