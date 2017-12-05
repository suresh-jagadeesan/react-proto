import { spy } from 'sinon';
import axios from 'axios';
import store from '../../src/client/store';
import { 
    INCREMENT, 
    DECREMENT, 
    RESET,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE 
} from '../../src/client/actions/action-types';
import { 
    increment, 
    decrement, 
    reset,
    fetchUsers,
    fetchUsersAsync,
    fetchUsersSuccess,
    fetchUsersFailure
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
        it('returns an action type of FETCH_USERS', () => {
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
        it('returns an action type of FETCH_USERS', () => {
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
});