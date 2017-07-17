import { GistClientPage } from './app.po';

describe('gist-client App', () => {
  let page: GistClientPage;

  beforeEach(() => {
    page = new GistClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
