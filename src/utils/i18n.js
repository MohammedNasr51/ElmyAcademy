import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../../public/locales/en/enTranslation.json";
import arTranslation from "../../public/locales/ar/arTranslation.json";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Bind with React
  .init({
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
    fallbackLng: "ar", // Default language
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default i18n;
