import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../src/client/store';
import Counter from '../../src/client/components/Counter';

describe('Counter', () => {
    let component, wrapper;

    beforeEach(() => {
        component = (
            <Provider store={store}>
                <Counter/>
            </Provider>
        );
        wrapper = mount(component);
        wrapper.find('#reset-button').simulate('click');
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(component)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('increments count when you press \'+\' button', () => {
        wrapper.find('#increment-button').simulate('click');

        expect(store.getState().counter.count).toBe(1);
    });

    it('decrements count when you press \'-\' button', () => {
        wrapper.find('#decrement-button').simulate('click');

        expect(store.getState().counter.count).toBe(-1);
    });

    it('resets count when you press \'reset\' button', () => {
        wrapper.find('#increment-button').simulate('click');
        wrapper.find('#increment-button').simulate('click');
        wrapper.find('#reset-button').simulate('click');

        expect(store.getState().counter.count).toBe(0);
    });
});