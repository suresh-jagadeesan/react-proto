import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Header from '../src/client/components/Header';
import Footer from '../src/client/components/Footer';
import App from '../src/client/App';

describe('<App/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should contain a <Header/>', () => {        
        expect(wrapper.contains(<Header/>)).toBe(true);
    });

    it('should contain a <Footer/>', () => {        
        expect(wrapper.contains(<Footer/>)).toBe(true);
    });
});