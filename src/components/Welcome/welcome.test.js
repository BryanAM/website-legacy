import React from 'react';
import { shallow } from 'enzyme';

import Welcome from './Welcome.jsx';

describe('Welcome', () => {
  it('should render correctly', () => {
    const component = shallow(<Welcome />);
    expect(component).toMatchSnapshot();
  });
});