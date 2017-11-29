import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from '../../src/client/components/Header';

describe('Header', () => {
    it('contains a Link to the Home Page', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.contains(<Link to='/'>Home</Link>)).to.equal(true);
    });

    it('contains a Link to the About Page', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.contains(<Link to='/about'>About</Link>)).to.equal(true);
    });

    it('contains a Link to the Contact Page', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.contains(<Link to='/contact'>Contact</Link>)).to.equal(true);
    });
});