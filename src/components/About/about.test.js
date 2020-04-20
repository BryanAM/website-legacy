import React from 'react';
import { shallow, mount } from 'enzyme';
import About from './About.jsx';

describe('About', () => {
  it('should render without issue', () => {
    const component = mount(<About />);
    expect(component).toMatchSnapshot();
  });
});