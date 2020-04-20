import React from 'react';
import { shallow, mount } from 'enzyme';
import i18n from '../../i18n/index.js';

import Welcome from './Welcome.jsx';

describe('Welcome', () => {
  it('should render correctly', () => {
    const component = shallow(<Welcome />);
    expect(component).toMatchSnapshot();
  });

  it('should be possible to change the language with button', () => {
    const component = mount(<Welcome />);
    let switchLang = i18n.language === 'ja' ? 'en' : 'ja';
    component
      .find('button')
      .simulate('click')
    expect(switchLang).toBe('ja');
  })
});