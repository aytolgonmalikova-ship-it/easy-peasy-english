import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon } from './Icons';

export const NAV_LINKS = [
  { to: '/', key: 'home', emoji: '🏠' },
  { to: '/about', key: 'about', emoji: '🌈' },
  { to: '/services', key: 'services', emoji: '🎒' },
  { to: '/contacts', key: 'contacts', emoji: '💌' },
];

export default function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const desktopLink = ({ isActive }) =>
    `rounded-full px-4 py-2 font-extrabold transition ${
      isActive ? 'bg-sun text-coal border-3 border-ink shadow-sticker-sm -rotate-2' : 'border-3 border-transparent hover:bg-surface'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled || open ? 'border-b-3 border-ink bg-cream' : 'border-b-3 border-transparent bg-cream'
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-3 sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map(({ to, key }) => (
            <NavLink key={to} to={to} end={to === '/'} className={desktopLink}>
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link to="/contacts" className="btn btn-coral btn-sm">
            {t('nav.enroll')}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border-3 border-ink bg-sun shadow-sticker-sm transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-[4.5rem] z-40 bg-coal/30 dark:bg-black/50 sm:top-20 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 px-4 pt-3 lg:hidden">
            <div className="card-sticker animate-pop mx-auto max-w-md p-4">
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {NAV_LINKS.map(({ to, key, emoji }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl border-3 px-4 py-3 text-lg font-extrabold transition ${
                        isActive ? 'border-ink bg-sun' : 'border-transparent hover:bg-sky-soft'
                      }`
                    }
                  >
                    <span className="text-2xl" aria-hidden="true">{emoji}</span>
                    {t(`nav.${key}`)}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-4 flex flex-col items-stretch gap-3 border-t-3 border-dashed border-ink/15 pt-4 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between">
                <LanguageSwitcher className="self-center" />
                <Link to="/contacts" className="btn btn-coral btn-sm">
                  {t('nav.enroll')}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
