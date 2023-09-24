import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru } from '@locales/ru';

i18next.use(initReactI18next).init({
  lng: 'ru',
  debug: import.meta.env.DEV,
  resources: { ru },
});
