import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '@/locales/es.json';
import en from '@/locales/en.json';

export const defaultLocale = 'es';
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    interpolation: { escapeValue: false },
  });
}

export default i18n;
