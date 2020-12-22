import $ from './querySelector-helper';
import UrlParser from '../routes/url-parser';

const Fragment = {
  intoView() {
    const { fragment } = UrlParser.activeUrlSplitter();
    if (fragment) {
      const elmnt = $(`#${fragment}`);
      if (elmnt) elmnt.scrollIntoView(true);
    }
  },
};

export default Fragment;