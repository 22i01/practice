import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRu from './locales/ru/translation.json';
import translationEn from './locales/en/translation.json';
import translationKk from './locales/kk/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: translationRu,
      },
      en: {
        translation: translationEn,
      },
      kk: {
        translation: translationKk,
      },
    },
    lng: 'ru', // Начальный язык
    fallbackLng: 'ru', // Язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false, // не нужно экранировать, так как React уже это делает
    },
  });

export default i18n;
