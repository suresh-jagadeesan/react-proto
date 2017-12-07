import { 
    INCREMENT, 
    DECREMENT, 
    RESET,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE 
} from '../../src/client/actions/action-types';

describe('Action Types', () => {
    describe('INCREMENT', () => {
        it('has a value of \'INCREMENT\'', () => {
            expect(INCREMENT).toBe('INCREMENT');
        });
    });

    describe('DECREMENT', () => {
        it('has a value of \'DECREMENT\'', () => {
            expect(DECREMENT).toBe('DECREMENT');
        });
    });

    describe('RESET', () => {
        it('has a value of \'RESET\'', () => {
            expect(RESET).toBe('RESET');
        });
    });

    describe('FETCH_USERS', () => {
        it('has a value of \'FETCH_USERS\'', () => {
            expect(FETCH_USERS).toBe('FETCH_USERS');
        });
    });

    describe('FETCH_USERS_SUCCESS', () => {
        it('has a value of \'FETCH_USERS_SUCCESS\'', () => {
            expect(FETCH_USERS_SUCCESS).toBe('FETCH_USERS_SUCCESS');
        });
    });

    describe('FETCH_USERS_FAILURE', () => {
        it('has a value of \'FETCH_USERS_FAILURE\'', () => {
            expect(FETCH_USERS_FAILURE).toBe('FETCH_USERS_FAILURE');
        });
    });
});