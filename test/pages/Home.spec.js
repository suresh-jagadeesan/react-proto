import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Home from '../../src/client/pages/Home';

describe('Home', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Home/>)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});