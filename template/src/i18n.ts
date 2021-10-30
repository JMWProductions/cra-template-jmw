import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { isDevelopment } from "shared/utils";
import en from "translations/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: isDevelopment(),
  react: {
    useSuspense: false,
  },
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18n;
