import { ru } from '@locales/ru';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof ru;
  }
}
