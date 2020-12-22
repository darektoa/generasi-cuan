import $ from './querySelector-helper';
import GeneralDB from '../data/general-source';

const AppShell = {
  init() {
    $('main').insertAdjacentHTML('beforebegin', this._header());
    $('main').insertAdjacentHTML('afterend', this._footer());

    this._infoInit();
  },


  remove() {
    $('body > header').remove();
    $('body > footer').remove();
  },


  async _infoInit() {
    const dataJson        = await GeneralDB.data();
    const addressElmnt    = $('footer > .text-box > .address');
    const emailElmnt      = $('footer > .socmed-box > .email > span');
    const instagramElmnt  = $('footer > .socmed-box > .instagram > span');
    const facebookElmnt   = $('footer > .socmed-box > .facebook > span');

    addressElmnt.innerText    = dataJson.address;
    emailElmnt.innerText      = dataJson.email;
    instagramElmnt.innerText  = dataJson.instagram;
    facebookElmnt.innerText   = dataJson.facebook;

    emailElmnt.parentElement.href     = 'https://mail.google.com/';
    instagramElmnt.parentElement.href = `https://instagram.com/${dataJson.instagram}`;
    facebookElmnt.parentElement.href  = `https://facebook.com/${dataJson.facebook}`;
  },


  _header() {
    return `
      <header>
          <div class="container">
              <div class="box-logo">
                  <!-- <img src="" alt="Logo"> -->
                  <h1>
                      <a href="/#/" class="icon-gencuan">
                          GENERA<span>$</span>I CUAN
                      </a>
                  </h1>
              </div>
              <nav>
                  <a href="#/login" class="button-regis">Join Now</a>
              </nav>
          </div>
      </header>
    `;
  },


  _footer() {
    return `
      <footer>
          <div class="text-box">
              <h2 class="icon-gencuan">
                  <!-- <img src="" alt="Icon"> -->
                  GENERA<span>$</span>I CUAN
              </h2>
              <p class="address"></p>
          </div>

          <div class="socmed-box">
              <a target="_blank" rel="noopener" href="https://gmail.com/" class="email">
                  <div class="icon_email-1"></div>
                  <span></span>
              </a>
              <a target="_blank" rel="noopener" href="https://instagram.com/" class="instagram">
                  <div class="icon_instagram-1"></div>
                  <span></span>
              </a>
              <a target="_blank" rel="noopener" href="https://facebook.com/" class="facebook">
                  <div class="icon_facebook-1"></div>
                  <span></span>
              </a>
          </div>
      </footer>
    `;
  },
};

export default AppShell;