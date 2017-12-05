import { 
    FETCH_USERS, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
    FETCH_SINGLE_USER, 
    FETCH_SINGLE_USER_SUCCESS, 
    FETCH_SINGLE_USER_FAILURE 
} from '../actions/action-types';

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
            case FETCH_SINGLE_USER:
            return { 
                ...state, 
                loading: true 
            };
        case FETCH_SINGLE_USER_SUCCESS:
            return { 
                ...state,
                user: action.payload.user, 
                loading: false 
            };
        case FETCH_SINGLE_USER_FAILURE:
            return { 
                ...state,
                loading: false,
                errorMessage: action.payload.error.message 
            };
        
        default:
            return state;
    }
}