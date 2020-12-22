import NotFound from '../views/pages/404';
import Home from '../views/pages/home';
import Login from '../views/pages/login';

const Routes = {
  '/': Home,
  404: NotFound,
  '/home': Home,
  '/login': Login,
};

export default Routes;