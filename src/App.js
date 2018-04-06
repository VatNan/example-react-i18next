import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class App extends Component {
  state = {
    lng: 'en'
  };

  editLang(lang = 'en') {
    this.setState({
      lng: lang,
    })
  }

  render() {
    const { lng } =this.state;
    return (
      <div className="App">
        <I18n>
          {t => (
            <div>
              <h2>{t('age.label', { lng })}</h2>
              <h2>{t('home.label', { lng })}</h2>
              <h2>{t('name.label', { lng })}</h2>
            </div>
          )}
        </I18n>
        <button onClick={() => { this.editLang() }}>
          To EN
        </button>
        <br />
        <button onClick={() => { this.editLang('th') }}>
          To TH
        </button>
      </div>
    );
  }
}

export default App;
