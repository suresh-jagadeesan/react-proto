import { combineReducers } from 'redux';
import countReducer from './countReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    counter: countReducer,
    users: usersReducer
});