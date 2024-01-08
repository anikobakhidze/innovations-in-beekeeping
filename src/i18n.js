// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translation/en/translation.json";
import ruTranslation from "./translation/ru/translation.json";
import kaTranslation from "./translation/ka/translation.json";

const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  ka: { translation: kaTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
