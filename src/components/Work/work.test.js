import React from 'react';
import i18n from '../../i18n/index';
import {  render, shallow, mount } from 'enzyme';
import Work from './Work.jsx';
import { I18nextProvider } from 'react-i18next';

describe('About', () => {
  it('should render without issue', () => {
    const component = shallow(
      <I18nextProvider i18n={i18n}>
        <Work />
      </I18nextProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the state inititally set to EY as current job', () => {
    const component = render(
      <I18nextProvider i18n={i18n}>
        <Work />
      </I18nextProvider>
    );

    const elementText = component.find('.company-name').text();
    expect(elementText).toBe('EY');
  });

  it('we should have the ability to change the state on click', () => {
    const component = mount(
      <I18nextProvider i18n={i18n}>
        <Work />
      </I18nextProvider>
    );
    // switching content by clicking on button 
    component.find('button').at(0).simulate('click');
        const elementText = component.find('.company-name').text();
    expect(elementText).toBe('Apple');
  });
});