import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en_locale_data from "react-intl/locale-data/en";
import es_locale_data from "react-intl/locale-data/es";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import Dogs from "./Dogs";

addLocaleData([...en_locale_data, ...es_locale_data]);

const messageMapping = {
  en,
  es
};

const locale = navigator.language.split("-")[0];

const App = () => {
  return (
    <IntlProvider locale={locale} messages={messageMapping[locale]}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/dogs" component={Dogs} />
      </Router>
    </IntlProvider>
  );
};

export default App;
