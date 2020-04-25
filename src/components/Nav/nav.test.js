import React from 'react';
import i18n from '../../i18n/index';
import { shallow, mount } from 'enzyme';
import Nav from './Nav.jsx';
import { I18nextProvider } from 'react-i18next';

describe('Nav', () => {
  it('renders without error', () => {
    const component = shallow(
      <I18nextProvider i18n={i18n}>
        <Nav />
      </I18nextProvider>
    );
    expect(component).toMatchSnapshot();
  });
});