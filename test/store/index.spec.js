import { expect } from 'chai';
import { createStore } from 'redux';
import { INCREMENT, DECREMENT, RESET } from '../../src/client/actions/action-types';
import store from '../../src/client/store';

describe('store', () => {

    afterEach(() => {
        store.dispatch({ type: RESET });
    });

    it('should have initial value of 0 for counter.count', () => {
        expect(store.getState().counter.count).to.equal(0);
    });

    it('should increment the count when it dispatches an action with type INCREMENT', () => {
        store.dispatch({ type: INCREMENT });

        expect(store.getState().counter.count).to.equal(1);
    });

    it('should decrement the count when it dispatches an action with type DECREMENT', () => {
        store.dispatch({ type: DECREMENT });
        
        expect(store.getState().counter.count).to.equal(-1);
    });

    it('should reset the count when it dispatches an action with type RESET', () => {
        store.dispatch({ type: INCREMENT });
        store.dispatch({ type: RESET });

        expect(store.getState().counter.count).to.equal(0);
    });
});