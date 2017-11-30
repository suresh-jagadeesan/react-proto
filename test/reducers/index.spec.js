import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';
import reducer from '../../src/client/reducers';

describe('Reducers', () => {

    it('should increment the count when it receives an action type of INCREMENT', () => {
        const result = reducer({ count: 0 }, { type: INCREMENT });

        expect(result.count).to.equal(1);
    });

    it('should decrement the count when it receives an action type of DECREMENT', () => {
        const result = reducer({ count: 0 }, { type: DECREMENT });
        
        expect(result.count).to.equal(-1);
    });
});