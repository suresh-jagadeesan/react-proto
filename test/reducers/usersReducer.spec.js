import { createStore } from 'redux';
import UsersReducer from '../../src/client/reducers/usersReducer';
import {
    fetchUsers,  
    fetchUsersSuccess,
    fetchUsersFailure 
} from '../../src/client/actions/index';
import usersReducer from '../../src/client/reducers/usersReducer';

describe('usersReducer', () => {

    it('should return loading is true if it receives FETCH_USERS action.type', () => {
        const result = usersReducer({ users: [] }, fetchUsers());

        expect(result.loading).toBe(true);
    });

    it('should return loading is false if it receives FETCH_USERS_SUCCESS action.type', () => {
        const result = usersReducer({ users: [] }, fetchUsersSuccess([]));
        
        expect(result.loading).toBe(false);
    });

    it('should return a list of users on receiving action type of FETCH_USERS_SUCCESS', () => {
        const users = [{id: 1, name: 'John'}, { id: 2, name: 'Jane'}]
        const result = usersReducer({ users: [] }, fetchUsersSuccess(users));

        expect(result.users).toEqual(users);
    });

    it('should return loading is false if it receives FETCH_USERS_FAILURE action.type', () => {
        const result = usersReducer({ users: [] }, fetchUsersFailure());
        
        expect(result.loading).toBe(false);
    });

    it('should return an error on receiving action type of FETCH_USERS_FAILURE', () => {
        const result = usersReducer({ users: [] }, fetchUsersFailure());
        
        expect(result.errorMessage).toBe('Cannot get the list of users');
    });
});