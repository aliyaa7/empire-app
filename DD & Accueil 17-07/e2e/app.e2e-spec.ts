import { AngularExemplePage } from './app.po';

describe('angular-exemple App', () => {
  let page: AngularExemplePage;

  beforeEach(() => {
    page = new AngularExemplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
