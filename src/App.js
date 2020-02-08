import React from 'react';
import About from './components/About/About.jsx';
import Nav from './components/Nav/Nav.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import Work from './components/Work/Work.jsx';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import './resources/styles/globals.scss';

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Nav />
        <Welcome />
        <About />
        <Work />
      </I18nextProvider>
    </div>
  );
}

export default App;
