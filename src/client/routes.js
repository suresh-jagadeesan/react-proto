import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const routes = [
    { component: App,
      routes: [
        { path: '/',
          exact: true,
          component: Home
        },
        { path: '/about',
          component: About
        },
        { path: '/Contact',
          component: Contact
        }
      ]
    }
  ];
  
  export default routes;