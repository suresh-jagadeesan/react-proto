import { expect } from 'chai';
import { createStore } from 'redux';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';
import reducers from '../../src/client/reducers';

describe('rootReducer', () => {
    let store;

    beforeEach(() => {
        store = createStore(reducers, { count: 0 });
    });

    it('should increment the count when it receives an action type of INCREMENT', () => {
        store.dispatch({ type: INCREMENT });

        expect(store.getState().counter.count).to.equal(1);
    });

    it('should decrement the count when it receives an action type of DECREMENT', () => {
        store.dispatch({ type: DECREMENT });
        
        expect(store.getState().counter.count).to.equal(-1);
    });
});