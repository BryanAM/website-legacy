import React from 'react';
import Nav from './components/Nav/Nav.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import './resources/styles/app.scss';

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Nav />
        <Welcome />
      </I18nextProvider>
    </div>
  );
}

export default App;
