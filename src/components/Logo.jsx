import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';

export default function Logo({ light = false }) {
  const { t } = useTranslation();

  return (
    <Link to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Easy Peasy English">
      <img
        src={logo}
        alt=""
        className="h-11 w-11 transition-transform group-hover:animate-wiggle sm:h-12 sm:w-12"
      />
      <span className="leading-none">
        <span className={`block text-lg font-black tracking-tight sm:text-xl ${light ? 'text-white' : 'text-ink'}`}>
          Easy <span className="text-coral">Peasy</span>
        </span>
        <span className={`block text-xs font-extrabold tracking-wide uppercase ${light ? 'text-sun' : 'text-sky-600 dark:text-sky'}`}>
          English
        </span>
      </span>
      <span className="sr-only">{t('nav.logoSub')}</span>
    </Link>
  );
}
