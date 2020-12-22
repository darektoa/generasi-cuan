/* eslint-disable no-alert */
import $ from '../../utilities/querySelector-helper';
import AppShell from '../../utilities/appshell-initiator';

const Login = {
  email: null,

  async render() {
    return `
      <section class="login-box">
          <div class="content-box">
              <div class="form-box">
                  <div class="logo-box">
                      <!-- <img src="" alt="logo"> -->
                      <h1 class="icon-gencuan">
                          GENERA<span>$</span>I CUAN
                      </h1>
                  </div>

                  <h2>Log In.</h2>
                  <p>Log in with your data that your entered during your registration.</p>

                  <div class="input-box">
                      <div class="icon_mail-black"></div>
                      <div class="icon_key-black"></div>
                      <input type="email" placeholder="Your Email Address">
                      <input type="password" placeholder="Your Password">
                      <label>
                        <input type="checkbox">
                        Keep Me Logged In
                      </label>
                  </div>
                  
                  <button class="login">Log In</button>
              </div>

              <img src="./images/login-side-image.png" alt="">

              <a href="/#/" class="icon_cross-white close" aria-label="Close This Page"></a>
          </div>
      </section>
    `;
  },

  async afterRender() {
    AppShell.remove();

    const inputEmailElmnt = $('.login-box > .content-box > .form-box > .input-box > input[type="email"]');
    const buttonLoginElmnt = $('.login-box > .content-box > .form-box > button');
    const buttonCloseElmnt = $('.login-box > .content-box > a.close');

    if (this.email) {
      inputEmailElmnt.value = this.email;
    }

    buttonLoginElmnt.addEventListener('click', () => {
      alert('Maaf, fitur tidak dapat digunakan untuk saat ini');
    });

    buttonCloseElmnt.addEventListener('click', () => {
      AppShell.init();
    });
  },
};

export default Login;