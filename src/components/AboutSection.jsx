import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';
import { ArrowIcon } from './Icons';

const FEATURE_STYLE = [
  { icon: '🎲', bg: 'bg-sun', rotate: '-rotate-1' },
  { icon: '🗣️', bg: 'bg-coral', rotate: 'rotate-1' },
  { icon: '🧩', bg: 'bg-sky', rotate: 'rotate-1' },
  { icon: '🏆', bg: 'bg-mint', rotate: '-rotate-1' },
];

export default function AboutSection() {
  const { t } = useTranslation();
  const features = t('about.features', { returnObjects: true });

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionTitle align="left" tag={t('about.tag')} title={t('about.title')} tagClass="bg-mint" />

          <blockquote className="relative mt-8 -rotate-1 rounded-[2.5rem] border-3 border-ink bg-sun p-7 shadow-sticker-lg sm:p-9">
            <span
              className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full border-3 border-ink bg-coral text-4xl leading-none font-black text-white"
              aria-hidden="true"
            >
              “
            </span>
            <p className="text-xl leading-snug font-black sm:text-2xl">{t('about.value')}</p>
          </blockquote>

          <p className="mt-8 text-lg font-semibold text-ink/75">{t('about.text')}</p>

          <Link to="/about" className="group mt-6 inline-flex items-center gap-2 text-lg font-black text-coral hover:underline">
            {t('about.more')}
            <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:pt-16">
          {Array.isArray(features) &&
            features.map((f, i) => {
              const s = FEATURE_STYLE[i % FEATURE_STYLE.length];
              return (
                <div
                  key={f.title}
                  className={`card-sticker p-6 transition duration-200 hover:-translate-y-1 hover:rotate-0 ${s.rotate} ${
                    i % 2 === 1 ? 'sm:translate-y-8' : ''
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[1.4rem] border-3 border-ink text-3xl ${s.bg}`}
                    aria-hidden="true"
                  >
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-black">{f.title}</h3>
                  <p className="mt-2 font-semibold text-ink/70">{f.text}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
