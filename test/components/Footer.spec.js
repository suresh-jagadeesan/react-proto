import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Footer from '../../src/client/components/Footer';

describe('Footer', () => {
    it('contains a some text', () => {
        const wrapper = shallow(<Footer/>);

        expect(wrapper.contains(<div>This is a Footer</div>)).to.equal(true);
    });
});