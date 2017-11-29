import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import App from '../App';

  const AppRouter = () => (
    <App>{renderRoutes(routes)}</App>
  );
  
  export default AppRouter;