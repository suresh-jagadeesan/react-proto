import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UsersPage from '../../../src/client/pages/users/UsersPage';
import store from '../../../src/client/store';

describe('UsersPage', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <UsersPage/>
                </Provider>
            )
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});