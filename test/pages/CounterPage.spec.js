import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../src/client/store';

import CounterPage from '../../src/client/pages/CounterPage';

describe('Contact', () => {
    it('renders correctly', () => {
        const component = (
            <Provider store={store}>
                <CounterPage/>
            </Provider>
        );

        const tree = renderer
            .create(component)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});