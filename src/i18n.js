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
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
