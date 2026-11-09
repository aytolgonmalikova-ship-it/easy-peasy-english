import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mascot from '../assets/mascot.svg';
import { Cloud, Star, Squiggle } from './Decorations';
import { ArrowIcon } from './Icons';

function Letter({ char, className, delay }) {
  return (
    <span
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`absolute z-20 flex h-12 w-12 animate-float items-center justify-center rounded-2xl border-3 border-ink text-2xl font-black shadow-sticker-sm sm:h-14 sm:w-14 sm:text-3xl ${className}`}
    >
      {char}
    </span>
  );
}

const PERK_ICONS = ['🎲', '👫', '🎁'];

export default function Hero() {
  const { t } = useTranslation();
  const perks = t('hero.perks', { returnObjects: true });

  return (
    <section className="relative overflow-hidden">
      <div className="dots-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <Cloud className="absolute top-8 -left-10 w-32 animate-float-slow opacity-90 sm:w-44" />
      <Cloud className="absolute top-24 right-[-2rem] hidden w-36 animate-float lg:block" />
      <Star className="absolute top-[12%] left-[46%] hidden h-9 w-9 animate-float lg:block" />
      <Star className="absolute bottom-16 left-[6%] h-7 w-7 animate-float-slow" color="#8EE3B4" />

      <div className="container-x relative grid items-center gap-12 pt-8 pb-16 sm:pt-12 lg:grid-cols-[1.1fr_1fr] lg:pt-16 lg:pb-24">
        {/* Text */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex -rotate-2 items-center gap-2 rounded-full border-3 border-ink bg-surface px-4 py-1.5 text-sm font-extrabold shadow-sticker-sm">
            <span aria-hidden="true">⭐</span> {t('hero.badge')}
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-black tracking-tight break-words min-[400px]:text-5xl sm:text-6xl xl:text-7xl">
            {t('hero.title1')}{' '}
            <span className="relative inline-block whitespace-nowrap text-coral">
              <span className="relative z-10">{t('hero.highlight')}</span>
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-sun sm:h-4" />
            </span>{' '}
            <span className="block sm:inline">{t('hero.title2')}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-ink/75 sm:text-xl lg:mx-0">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/contacts" className="btn btn-coral w-full text-lg sm:w-auto">
              {t('hero.cta')} <ArrowIcon className="h-5 w-5" />
            </Link>
            <Link to="/services" className="btn btn-sky w-full text-lg sm:w-auto">
              {t('hero.secondary')}
            </Link>
          </div>

          {Array.isArray(perks) && (
            <ul className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {perks.map((perk, i) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 rounded-full border-2 border-ink/15 bg-surface/80 px-3.5 py-1.5 text-sm font-extrabold"
                >
                  <span aria-hidden="true">{PERK_ICONS[i]}</span> {perk}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Illustration */}
        <div className="relative mx-auto aspect-square w-full max-w-[19rem] min-[400px]:max-w-[23rem] sm:max-w-md">
          <div className="absolute inset-[7%] animate-blob border-3 border-ink bg-sky shadow-sticker-lg" aria-hidden="true" />
          <div
            className="absolute inset-[20%] animate-blob bg-sun-soft/60"
            style={{ animationDelay: '-5s' }}
            aria-hidden="true"
          />
          <img
            src={mascot}
            alt="Peasy — Easy Peasy English mascot"
            className="relative z-10 h-full w-full animate-float p-[9%] drop-shadow-[0_6px_0_rgba(43,45,66,0.15)]"
          />

          <div className="absolute top-[2%] right-[-2%] z-20 rotate-6 animate-float-slow rounded-3xl rounded-bl-md border-3 border-ink bg-surface px-4 py-2 text-base font-black shadow-sticker-sm sm:text-lg">
            {t('hero.bubble')} <span aria-hidden="true">👋</span>
          </div>

          <Letter char="A" className="top-[30%] left-[-3%] -rotate-12 bg-coral text-white" delay="-1s" />
          <Letter char="B" className="top-[48%] right-[-4%] rotate-12 bg-mint" delay="-3s" />
          <Letter char="C" className="right-[14%] bottom-[0%] -rotate-6 bg-grape" delay="-2s" />

          <div className="absolute bottom-[3%] left-[-2%] z-20 -rotate-3 rounded-2xl border-3 border-ink bg-surface px-4 py-2 shadow-sticker">
            <div className="text-2xl leading-none font-black text-coral">500+</div>
            <div className="text-xs font-extrabold">{t('hero.kidsLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
