import { createStore } from 'redux';
import reducers from '../reducers';
import initialState from './initialState';

export default createStore(
    reducers,
    initialState
);