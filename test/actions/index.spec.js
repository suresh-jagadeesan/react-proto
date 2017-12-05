import { spy } from 'sinon';
import axios from 'axios';
import store from '../../src/client/store';
import { 
    INCREMENT, 
    DECREMENT, 
    RESET,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_SINGLE_USER,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILURE  
} from '../../src/client/actions/action-types';
import { 
    increment, 
    decrement, 
    reset,
    fetchUsers,
    fetchUsersAsync,
    fetchUsersSuccess,
    fetchUsersFailure,
    fetchSingleUser,
    fetchSingleUserAsync,
    fetchSingleUserSuccess,
    fetchSingleUserFailure
 } from '../../src/client/actions';

const axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});


describe('actions', () => {

    describe('increment', () => {
        it('returns an action type of INCREMENT', () => {
            expect(increment().type).toBe(INCREMENT);
        });
    });

    describe('decrement', () => {
        it('returns an action type of DECREMENT', () => {
            expect(decrement().type).toBe(DECREMENT);
        });
    });

    describe('reset', () => {
        it('returns an action type of RESET', () => {
            expect(reset().type).toBe(RESET);
        });
    });

    describe('fetchUsers', () => {
        it('returns an action type of FETCH_USERS', () => {
            expect(fetchUsers().type).toBe(FETCH_USERS);
        });
    });

    describe('fetchUsersSuccess', () => {
        it('returns an action type of FETCH_USERS_SUCCESS', () => {
            expect(fetchUsersSuccess().type).toBe(FETCH_USERS_SUCCESS);
        });

        it('accepts and returns a list of users', () => {
            const users = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 20 }
            ];

            expect(fetchUsersSuccess(users).payload).toEqual({ users });
        });
    });

    describe('fetchUsersFailure', () => {
        it('returns an action type of FETCH_USERS_FAILURE', () => {
            expect(fetchUsersFailure().type).toBe(FETCH_USERS_FAILURE);
        });

        it('should return an error message', () => {
            const error = { message: 'Cannot get the list of users' };

            expect(fetchUsersFailure().payload).toEqual({ error });
        });
    });

    describe('fetchUsersAsync', () => {
        it('dispatches a FETCH_USER action type', async () => {
            const mockFn = jest.fn();
            const url = 'https://jsonplaceholder.typicode.com/users';
            const users = await axios.get(url);
            const dispatch = await fetchUsersAsync(url)(mockFn);

            expect(mockFn).toHaveBeenCalledWith(
                fetchUsers()
            );
        });

        it('dispatches an action type of FETCH_USERS_SUCCESS and a payload of users on success', async () => {
            const mockFn = jest.fn();
            const url = 'https://jsonplaceholder.typicode.com/users';
            const { data } = await axiosInstance.get('/users');

            await fetchUsersAsync('/users')(mockFn, {}, axiosInstance);

            expect(mockFn).toHaveBeenLastCalledWith(
                fetchUsersSuccess(data)
            );
        });

        it('dispatches an action type of FETCH_USERS_FAILURE and a payload with an error message on failure', async () => {
            const mockFn = jest.fn();
            const url = 'httofjkisjfiewj';
            const error = { message: 'Cannot get the list of users' };
            
            await fetchUsersAsync(url)(mockFn);
            
            expect(mockFn).toHaveBeenLastCalledWith(
                fetchUsersFailure()
            );
        });
    });

    describe('fetchSingleUser', () => {
        it('returns an action type of FETCH_SINGLE_USER', () => {
            expect(fetchSingleUser().type).toBe(FETCH_SINGLE_USER);
        });
    });

    describe('fetchSingleUserSuccess', () => {
        it('returns an action type of FETCH_SINGLE_USER_SUCCESS', () => {
            expect(fetchSingleUserSuccess().type).toBe(FETCH_SINGLE_USER_SUCCESS);
        });

        it('accepts and returns an object of a user', () => {
            const user = { id: 1, name: 'John' };

            expect(fetchSingleUserSuccess(user).payload).toEqual({ user });
        });
    });

    describe('fetchSingleUserFailure', () => {
        it('returns an action type of FETCH_SINGLE_USER_FAILURE', () => {
            expect(fetchSingleUserFailure().type).toBe(FETCH_SINGLE_USER_FAILURE);
        });

        it('should return an error message', () => {
            const error = { message: 'Cannot cannot get user profile' };

            expect(fetchSingleUserFailure().payload).toEqual({ error });
        });
    });

    describe('fetchSingleUserAsync', () => {
        it('dispatches a FETCH_SINGLE_USER action type', async () => {
            const mockFn = jest.fn();
            const url = '/users/1';
            const dispatch = await fetchSingleUserAsync(url)(mockFn, {}, axiosInstance);

            expect(mockFn).toHaveBeenCalledWith(
                fetchSingleUser()
            );
        });

        it('dispatches an action type of FETCH_SINGLE_USER_SUCCESS and a payload of users on success', async () => {
            const mockFn = jest.fn();
            const url = '/users/1';
            const { data } = await axiosInstance.get(url);

            await fetchSingleUserAsync(url)(mockFn, {}, axiosInstance);

            expect(mockFn).toHaveBeenLastCalledWith(
                fetchSingleUserSuccess(data)
            );
        });

        it('dispatches an action type of FETCH_SINGLE_USER_FAILURE and a payload with an error message on failure', async () => {
            const mockFn = jest.fn();
            const url = '/httofjkisjfiewj';
            
            await fetchSingleUserAsync(url)(mockFn);
            
            expect(mockFn).toHaveBeenLastCalledWith(
                fetchSingleUserFailure()
            );
        });
    });
});