import { createStore } from 'redux';
import reducers from '../reducers';

export default createStore(
    reducers,
    { 
        counter: {
            count: 0
        }
    }
);