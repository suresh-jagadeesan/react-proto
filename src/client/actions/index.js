import axios from 'axios';
import { 
    INCREMENT, 
    DECREMENT, 
    RESET, 
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './action-types';

export function increment () {
    return { type: INCREMENT };
}

export function decrement () {
    return { type: DECREMENT };
}

export function reset () {
    return { type: RESET };
}

export function fetchUsers() {
    return { type: FETCH_USERS };
}

export function fetchUsersSuccess(users) {
    return { 
        type: FETCH_USERS_SUCCESS,
        payload: { users } 
    };
};

export function fetchUsersFailure() {
    return { 
        type: FETCH_USERS_FAILURE,
        payload: { 
            error: { 
                message: 'Cannot get the list of users' 
            }
        } 
    };
};

export const fetchUsersAsync = (url) => async (dispatch, getState, api) => {
    dispatch(fetchUsers());

    try {
       const { data } = await api.get(url);

        dispatch(fetchUsersSuccess(data));
    } catch(e) {
        dispatch(fetchUsersFailure());
    }
};