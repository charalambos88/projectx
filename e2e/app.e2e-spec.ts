import { ProjectxPage } from './app.po';

describe('projectx App', () => {
  let page: ProjectxPage;

  beforeEach(() => {
    page = new ProjectxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
