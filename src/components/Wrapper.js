import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';
import Portuguese from '../lang/pt-BR.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
switch (local) {
    case 'fr':
        lang = French;
    break;
    case 'ar':
        lang = Arabic;
    break;
    case 'pt-BR':
        lang = Portuguese;
    break;
    default:
        lang = English;
}


const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [url, setUrl] = useState(lang['react.site']);
    const [currency, setCurrency] = useState(lang['app.currency']);
    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        switch (newLocale) {
            case 'fr':
                setMessages(French);
                setUrl(French['react.site']);
                setCurrency(French['app.currency']);
            break;
            case 'ar':
                setMessages(Arabic);
                setUrl(Arabic['react.site']);
                setCurrency(Arabic['app.currency']);
            break;
            case 'pt-BR':
                setMessages(Portuguese);
                setUrl(Portuguese['react.site']);
                setCurrency(Portuguese['app.currency']);
            break;
            default:
                setMessages(English);
                setUrl(English['react.site']);
                setCurrency(English['app.currency']);
            break;
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage, url, currency}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;