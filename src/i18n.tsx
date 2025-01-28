import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import uzTranslation from "./locales/uz.json";
import uzKirilTranslation from "./locales/uz-kiril.json";
import engTranslation from "./locales/eng.json";
import rusTranslation from "./locales/rus.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      uzKr: { translation: uzKirilTranslation },
      eng: { translation: engTranslation },
      rus: { translation: rusTranslation },
    },
  });

export default i18n;
