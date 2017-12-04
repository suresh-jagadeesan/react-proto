import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import initialState from './initialState';
import { applyMiddleware } from 'redux';

export default createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);