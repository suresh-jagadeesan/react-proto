import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { INCREMENT, DECREMENT } from '../../src/client/actions/action-types';
import { increment, decrement } from '../../src/client/actions';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });   

    describe('increment', () => {
        it('should increment count', () => {
            const store = mockStore({ count: 0 });
            

            store.dispatch(decrement(() => {
                expect(store.count).to.equals(1);
            }));
        });
    });

    describe('decrement', () => {
        it('should decrement count', () => {
            const store = mockStore({ count: 0 });
            

            store.dispatch(decrement(() => {
                expect(store.count).to.equals(-1);
            }));
        });
    });
});