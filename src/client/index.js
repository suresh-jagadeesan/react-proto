import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './container/AppRouter';

hydrate(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>,
    document.querySelector('#root')
);