// LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>Eng</button>
      <button onClick={() => changeLanguage("ru")}>Ru</button>
      <button onClick={() => changeLanguage("ka")}>Ge</button>
    </div>
  );
}

export default LanguageSwitcher;