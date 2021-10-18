import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./components/I18n/en.json"
import es from "./components/I18n/es.json"

i18n
    // Detect user Language from browser
    .use(LanguageDetector)
    // Pass i18n instance to React-i18next
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: 'en',
        debug: true,
        returnObjects: true,
        resources: {
            en: {
                translation: en
            },
            es : {
                translation: es
            }
        }
    });

    export default i18n;