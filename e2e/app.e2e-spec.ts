import { AngularBugPage } from './app.po';

describe('angular-bug App', () => {
  let page: AngularBugPage;

  beforeEach(() => {
    page = new AngularBugPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
