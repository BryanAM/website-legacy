import React from 'react';
import i18n from '../../i18n/index';
import { shallow } from 'enzyme';
import Projects from './Projects.jsx';
import { I18nextProvider } from 'react-i18next';

describe('Projects', () => {
  it('renders without error', () => {
    const component = shallow(
      <I18nextProvider i18n={i18n}>
        <Projects />
      </I18nextProvider>
    );
    expect(component).toMatchSnapshot();
  });
});