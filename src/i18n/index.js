import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { jp, en } from './locales/index';

const options = {
  interpolation: {
    escapeValue: false,
  },
  caches: ['localStorage', 'cookie'],
  fallbackLng: 'jp',
  debug: true,

  resources: {
    en: {
      common: en.en,
    },
    
    jp: {
      common: jp.jp
    }
  },

  ns: ['common'],
  defaultNS: 'common',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
};

i18n
  .use(LanguageDetector)
  .init(options)

export default i18n;