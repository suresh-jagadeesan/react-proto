import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import About from '../../src/client/pages/About';

describe('About', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<About/>)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});