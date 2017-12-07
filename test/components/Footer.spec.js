import React from 'react';
// import { expect } from 'jest';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../../src/client/components/Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Footer/>)
            .toJSON();

      expect(tree).toMatchSnapshot();
    });
});