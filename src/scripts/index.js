import 'regenerator-runtime';


// STYLES IMPORT
import '../styles/main.css';
import '../styles/icons.css';
import '../styles/font-size.css';
import '../styles/header.css';
import '../styles/hero-box.css';
import '../styles/seminar-box.css';
import '../styles/course-box.css';
import '../styles/feature-box.css';
import '../styles/testimonial-box.css';
import '../styles/question-box.css';
import '../styles/footer.css';
import '../styles/404.css';
import '../styles/login.css';

// JAVASCRIPT IMPORT
import $ from './utilities/querySelector-helper';
import IE from './utilities/internetExplorer-helper';
import Fragment from './utilities/fragment-helper';
import swRegister from './utilities/sw-register';
import App from './views/app';

const app = new App({
  content: $('main'),
});


window.addEventListener('load', () => {
  IE.redirectToEdge();
  swRegister();
  app.renderPage();
  Fragment.intoView();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  Fragment.intoView();
});