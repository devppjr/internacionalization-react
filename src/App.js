import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
import {Context} from "./components/Wrapper";

function App(props) {
  const context = useContext(Context);

  function redirect() {
    window.open(context.url)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value = {context.locale} onChange={context.selectLanguage}>
          <option value= 'en'>English</option>
          <option value= 'fr'>French</option>
          <option value= 'pt-BR'>Portuguese</option>
          <option value= 'ar'>Arabic</option>
        </select>
        <p>
          <FormattedMessage
              id = "app.header"
              defaultMessage="Edite os arquivos e salve para recarregar"
              values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
          />
        </p>
        <a
          className="App-link"
          href="#"
          onClick={() => redirect()}
        >
          <FormattedMessage
            id = "app.content"
            defaultMessage="Learn React"
          />

        </a>
        <FormattedMessage
          id = "app.channel.plug"
          defaultMessage="Internacionalizado por alunos da UFSC"
          values = {{institution: "UFSC"}}
        />
        <br/>
        <FormattedPlural
            id = "app.plural"
            defaultMessage="{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong fromat}}"
            values = {{amount: 90}}
        />
        <br/>
        <FormattedDate
            value={props.date}
            year = 'numeric'
            month= 'long'
            day = 'numeric'
            weekday = 'long'
        />
        <br/>
        <FormattedNumber
            value={20.42}
            style="currency"
            currencyDisplay="symbol"
            currency={context.currency}
        /><br/>
        <FormattedNumber
            value={10000}
        />
        <br/>
        <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZoneName="long"
        />
      </header>
    </div>
  );
}

export default App;
