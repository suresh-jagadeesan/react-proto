import { INCREMENT, DECREMENT, RESET } from '../../src/client/actions/action-types';

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
});