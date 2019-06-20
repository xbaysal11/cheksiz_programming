import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import kg from "./locales/kg.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: en
      },
      ru: {
        translations: ru
      },
      kg: {
        translations: kg
      }
    },
    fallbackLng: "ru",
    debug: true,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    // keySeparator: true, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
