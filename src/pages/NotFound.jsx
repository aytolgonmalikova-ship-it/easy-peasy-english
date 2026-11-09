import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mascot from '../assets/mascot.svg';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  const { t } = useTranslation();
  usePageTitle('meta.notFound');

  return (
    <section className="container-x flex flex-col items-center py-20 text-center">
      <div className="relative">
        <img src={mascot} alt="" className="w-48 animate-float sm:w-60" />
        <span className="absolute -top-2 -right-4 text-5xl font-black text-coral" aria-hidden="true">?</span>
      </div>
      <div className="mt-4 text-7xl font-black text-sky [text-shadow:4px_4px_0_var(--color-ink)] sm:text-8xl">404</div>
      <h1 className="mt-4 text-3xl font-black sm:text-4xl">{t('notFound.title')}</h1>
      <p className="mt-3 max-w-md text-lg font-semibold text-ink/70">{t('notFound.text')}</p>
      <Link to="/" className="btn btn-coral mt-8">
        {t('notFound.back')}
      </Link>
    </section>
  );
}
