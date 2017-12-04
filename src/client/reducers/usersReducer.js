import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/action-types';

export default function (state = { users: [], loading: false, errorMessage: '' }, action) {
    switch (action.type) {
        case FETCH_USERS:
            return { 
                ...state, 
                loading: true 
            };
        case FETCH_USERS_SUCCESS:
            return { 
                ...state,
                users: action.payload.users, 
                loading: false 
            };
        case FETCH_USERS_FAILURE:
            return { 
                ...state,
                loading: false,
                errorMessage: action.payload.error.message 
            };
        
        default:
            return state;
    }
}