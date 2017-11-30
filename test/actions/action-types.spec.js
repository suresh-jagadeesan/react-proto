import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';

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
});