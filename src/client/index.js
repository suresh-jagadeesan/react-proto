import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './App';

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);