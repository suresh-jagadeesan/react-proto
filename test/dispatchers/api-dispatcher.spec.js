import { 
    fetchUsers,
    fetchUsersSuccess,
    fetchUsersFailure
 } from '../../src/client/actions';
 import {
    FETCH_USERS_SUCCESS
 } from '../../src/client/actions/action-types';
 import apiDispatcher from '../../src/client/dispatchers/api-dispatcher';
 import store from '../../src/client/store';

 describe('apiDispatcher', () => {
     it('should accept a fetchUsers() action and return FETCH_USERS_SUCCESS action.type on success', () => {
        const action = apiDispatcher('http://jsonplaceholder.typicode.com/users', fetchUsers());

        expect(action.type).toBe(FETCH_USERS_SUCCESS);
     });

     it('should accept a fetchUsers() action and return a payload of users on success', () => {
        const action = apiDispatcher('http://jsonplaceholder.typicode.com/users', fetchUsers());

        expect(action.payload.users).toBeGreaterThan(0);
     });

     it('should accept a fetchUsers() action and return fetchUsersFailure action on failure', () => {
        const action = apiDispatcher('sadasres', fetchUsers());

        expect(action.type).toEqual(fetchUsersFailure());
     });
 });
