import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./css/languageSwitcher.module.css";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const chosenLang = i18n.language;
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.languageWrapper}>
      <button
        className={chosenLang === "en" ? styles.selectedLanguage : ""}
        onClick={() => changeLanguage("en")}
      >
        Eng
      </button>
      <button
        className={chosenLang === "ru" ? styles.selectedLanguage : ""}
        onClick={() => changeLanguage("ru")}
      >
        Ru
      </button>
      <button
        className={chosenLang === "ka" ? styles.selectedLanguage : ""}
        onClick={() => changeLanguage("ka")}
      >
        Ge
      </button>
    </div>
  );
}

export default LanguageSwitcher;
