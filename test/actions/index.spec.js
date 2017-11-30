import { expect } from 'chai';
import { INCREMENT, DECREMENT, RESET } from '../../src/client/actions/action-types';
import { increment, decrement, reset } from '../../src/client/actions';



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

    describe('reset', () => {
        it('returns an action type of RESET', () => {
            expect(reset().type).to.equal(RESET);
        });
    });
});