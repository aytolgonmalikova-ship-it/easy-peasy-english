import { useTranslation } from 'react-i18next';
import { useTheme, toggleTheme } from '../theme';
import { SunIcon, MoonIcon } from './Icons';

export default function ThemeToggle({ className = '' }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? t('nav.themeLight') : t('nav.themeDark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border-3 border-ink bg-surface text-ink shadow-sticker-sm transition hover:-translate-y-0.5 hover:-rotate-12 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:h-12 sm:w-12 ${className}`}
    >
      <SunIcon
        className={`absolute h-6 w-6 text-sun transition-all duration-300 ${
          isDark ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-6 rotate-90 opacity-0'
        }`}
      />
      <MoonIcon
        className={`absolute h-6 w-6 text-ink transition-all duration-300 ${
          isDark ? '-translate-y-6 -rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
        }`}
      />
    </button>
  );
}
