import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Header from '../../src/client/components/Header';

describe('Header', () => {
    
    it('renders correctly', () => {
        const component = (
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );

        const tree = renderer
            .create(component)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('contains a Link to the Home Page', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.contains(<Link to='/'>Home</Link>)).toBe(true);
    });

    it('contains a Link to the About Page', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.contains(<Link to='/about'>About</Link>)).toBe(true);
    });

    it('contains a Link to the Contact Page', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.contains(<Link to='/contact'>Contact</Link>)).toBe(true);
    });
});