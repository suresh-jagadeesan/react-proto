import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);