import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n';

export default function LanguageSwitcher({ className = '' }) {
  const { t, i18n } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t('nav.language')}
      className={`inline-flex items-center gap-1 rounded-full border-3 border-ink bg-surface p-1 shadow-sticker-sm ${className}`}
    >
      {LANGUAGES.map(({ code, label }) => {
        const active = i18n.language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={active}
            className={`cursor-pointer rounded-full px-3 py-1 text-sm font-black transition ${
              active ? 'bg-ink text-sun dark:bg-sun dark:text-coal' : 'text-ink hover:bg-sun-soft'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
