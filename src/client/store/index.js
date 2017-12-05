import { createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../reducers';
import initialState from './initialState';
import { applyMiddleware } from 'redux';

const axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
});

export default createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);