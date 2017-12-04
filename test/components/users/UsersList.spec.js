import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';

import UsersList from '../../../src/client/components/users/UsersList';

describe('UsersList', () => {
    it('renders correctly with a list of users', async () => {
        const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');

        const tree = renderer
            .create(<UsersList users={data}/>)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});