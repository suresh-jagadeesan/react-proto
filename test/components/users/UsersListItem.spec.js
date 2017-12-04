import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';

import UsersListItem from '../../../src/client/components/users/UsersListItem';

describe('UsersListItem', () => {
    it('renders correctly with a list of users', async () => {
        const user = await axios.get('http://jsonplaceholder.typicode.com/users/1');

        const tree = renderer
            .create(<UsersListItem user={user}/>)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});