import React from 'react'
import { shallow, mount } from 'enzyme';
import i18n from '../../i18n/index.js';
import Connect from './Connect.jsx';

describe('Connect', () => {
  it('should render on load correctly', () => {
    const component = shallow(<Connect />);
    expect(component).toMatchSnapshot();
  });
}); 
