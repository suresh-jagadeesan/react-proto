import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Contact from '../../src/client/pages/Contact';

describe('Contact', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Contact/>)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});