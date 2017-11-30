import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';
import { increment, decrement } from '../../src/client/actions';



describe('actions', () => {

    describe('increment', () => {
        it('returns an action type of INCREMENT', () => {
            expect(increment().type).to.equal(INCREMENT);
        });
    });

    describe('decrement', () => {
        it('returns an action type of DECREMENT', () => {
            expect(decrement().type).to.equal(DECREMENT);
        });
    });
});