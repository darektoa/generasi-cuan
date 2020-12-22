import AppShell from '../utilities/appshell-initiator';
import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
    AppShell.init();
  }

  async renderPage() {
    const url = UrlParser.activeUrl();
    const page = Routes[url];

    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
      return;
    }

    this._content.innerHTML = await Routes[404].render();
  }
}

export default App;