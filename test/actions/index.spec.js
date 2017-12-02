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
    fetchUsersSuccess,
    fetchUsersFailure
 } from '../../src/client/actions';



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

            expect(fetchUsersFailure(error).payload).toEqual({ error });
        });
    });
});