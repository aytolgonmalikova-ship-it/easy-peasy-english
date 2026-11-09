import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import kg from './locales/kg.json';

export const LANGUAGES = [
  { code: 'kg', label: 'KG', htmlLang: 'ky' },
  { code: 'ru', label: 'RU', htmlLang: 'ru' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
];

const STORAGE_KEY = 'epe-lang';

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGUAGES.some((l) => l.code === saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  const browser = (navigator.language || '').toLowerCase();
  if (browser.startsWith('ky')) return 'kg';
  if (browser.startsWith('en')) return 'en';
  return 'ru';
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    kg: { translation: kg },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

function syncLanguage(lng) {
  document.documentElement.lang = LANGUAGES.find((l) => l.code === lng)?.htmlLang || lng;
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* storage unavailable */
  }
}

syncLanguage(i18n.language);
i18n.on('languageChanged', syncLanguage);

export default i18n;
