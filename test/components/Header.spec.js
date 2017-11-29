import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// import sinon from 'sinon';

import Header from '../../src/client/components/Header';

decribe('Header', () => {
    it('contains a Link to the Home Page', () => {
        const wrapper = shallow(<Header/>);
        
        expect(wrapper.contains(<Link to='/'>Home</Link>)).to.equal(true);
    });
});