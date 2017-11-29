import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';
import { increment, decrement } from '../../src/client/actions';

describe('actions', () => {
    describe('increment', () => {
        it('should return a payload with action-type INCREMENT', () => {
            increment(func => {
                func(payload => {
                    expect(payload.type).to.equal(INCREMENT);
                });
            });
        });
    });

    describe('decrement', () => {
        it('should return a payload with action-type DECREMENT', () => {
            decrement(fn => {
                fn(payload => {
                    expect(payload.type).to.equal(DECREMENT);
                });
            });
        });
    });
});