import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

export default () => (
    <div>
        <Header/>
        {renderRoutes(routes)}
        <Footer/>
    </div>
);