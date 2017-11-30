import { expect } from 'chai';
import { createStore } from 'redux';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';
import countReducer from '../../src/client/reducers/countReducer';

describe('countReducer', () => {

    it('should increment the count when it receives an action type of INCREMENT', () => {
        const result = countReducer({ count: 0 }, { type: INCREMENT });

        expect(result.count).to.equal(1);
    });

    it('should decrement the count when it receives an action type of DECREMENT', () => {
        const result = countReducer({ count: 0 }, { type: DECREMENT });
        
        expect(result.count).to.equal(-1);
    });
});