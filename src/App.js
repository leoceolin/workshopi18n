import React from "react";

import I18n, { Translator } from "components/I18n";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="app">
      <Translator path="home.message" />
      <br />
      <Translator path="phrase" />
      <p>{t("quote")}</p>
      <I18n />
    </div>
  );
};

export default App;
