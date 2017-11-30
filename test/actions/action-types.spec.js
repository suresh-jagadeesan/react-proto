import { expect } from 'chai';
import { INCREMENT, DECREMENT, RESET } from '../../src/client/actions/action-types';

describe('Action Types', () => {
    describe('INCREMENT', () => {
        it('has a value of \'INCREMENT\'', () => {
            expect(INCREMENT).to.equal('INCREMENT');
        });
    });

    describe('DECREMENT', () => {
        it('has a value of \'DECREMENT\'', () => {
            expect(DECREMENT).to.equal('DECREMENT');
        });
    });

    describe('RESET', () => {
        it('has a value of \'RESET\'', () => {
            expect(RESET).to.equal('RESET');
        });
    });
});