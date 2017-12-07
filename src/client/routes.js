import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CounterPage from './pages/CounterPage';
import UsersPage from './pages/users/UsersPage';
import { fetchUsersAsync } from './actions/index';

const routes = [
    { 
        path: '/',
        exact: true,
        component: Home
    },
    { 
        path: '/about',
        component: About
    },
    { 
        path: '/contact',
        component: Contact
    },
    {
        path: '/counter',
        component: CounterPage
    },
    {
        path: '/users',
        component: UsersPage,
        loadData: (store) => store.dispatch(fetchUsersAsync('http://jsonplaceholder.typicode.com/users'))
    }
  ];

  export default routes;