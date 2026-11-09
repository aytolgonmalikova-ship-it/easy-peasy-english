import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckIcon } from './Icons';
import { formatPrice } from '../utils/validators';

export const TONE_CLASSES = {
  sun: { solid: 'bg-sun', soft: 'bg-sun-soft' },
  sky: { solid: 'bg-sky', soft: 'bg-sky-soft' },
  coral: { solid: 'bg-coral', soft: 'bg-coral-soft' },
  mint: { solid: 'bg-mint', soft: 'bg-mint-soft' },
  grape: { solid: 'bg-grape', soft: 'bg-grape-soft' },
};

export default function CourseCard({ course, index = 0 }) {
  const { t } = useTranslation();
  const { id, emoji, tone, age, lessonsPerWeek, duration, price, popular } = course;
  const c = TONE_CLASSES[tone] || TONE_CLASSES.sun;
  const features = t(`courses.items.${id}.features`, { returnObjects: true });
  const title = t(`courses.items.${id}.title`);

  return (
    <article
      className="card-sticker group relative flex animate-pop flex-col transition-all duration-200 hover:-translate-y-1.5 hover:shadow-sticker-lg"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {popular && (
        <span className="absolute -top-4 right-5 z-10 rotate-6 rounded-full border-3 border-ink bg-coral px-3 py-1 text-xs font-black text-white uppercase shadow-sticker-sm">
          ★ {t('courses.popular')}
        </span>
      )}

      <div className={`rounded-t-[1.8rem] border-b-3 border-ink px-6 pt-6 pb-5 ${c.soft}`}>
        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex h-16 w-16 -rotate-3 items-center justify-center rounded-2xl border-3 border-ink text-4xl shadow-sticker-sm group-hover:animate-wiggle ${c.solid}`}
            aria-hidden="true"
          >
            {emoji}
          </div>
          <span className="rounded-full border-3 border-ink bg-surface px-3 py-1 text-sm font-black whitespace-nowrap">
            {t('courses.age', { age })}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-black">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <p className="font-semibold text-ink/75">{t(`courses.items.${id}.desc`)}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm font-extrabold">
          <span className="rounded-full bg-cream px-3 py-1">🗓 {t('courses.lessons', { count: lessonsPerWeek })}</span>
          <span className="rounded-full bg-cream px-3 py-1">⏱ {t('courses.duration', { count: duration })}</span>
        </div>

        {Array.isArray(features) && (
          <ul className="mt-5 space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 font-bold">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink ${c.solid}`}>
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-t-3 border-dashed border-ink/15 pt-5">
          <div>
            <div className="text-3xl leading-none font-black">
              {formatPrice(price)} <span className="text-lg">{t('courses.currency')}</span>
            </div>
            <div className="mt-1 text-sm font-bold text-ink/60">{t('courses.perMonth')}</div>
          </div>
          <Link to={`/contacts?course=${id}`} className="btn btn-coral btn-sm">
            {t('courses.enroll')}
          </Link>
        </div>
        </div>
      </div>
    </article>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="card-sticker flex animate-pulse flex-col overflow-hidden" aria-hidden="true">
      <div className="border-b-3 border-ink/10 bg-ink/5 px-6 pt-6 pb-5">
        <div className="flex justify-between">
          <div className="h-16 w-16 rounded-2xl bg-ink/10" />
          <div className="h-8 w-20 rounded-full bg-ink/10" />
        </div>
        <div className="mt-4 h-7 w-3/4 rounded-full bg-ink/10" />
      </div>
      <div className="space-y-3 px-6 py-6">
        <div className="h-4 w-full rounded-full bg-ink/10" />
        <div className="h-4 w-5/6 rounded-full bg-ink/10" />
        <div className="flex gap-2 pt-2">
          <div className="h-7 w-28 rounded-full bg-ink/10" />
          <div className="h-7 w-20 rounded-full bg-ink/10" />
        </div>
        <div className="space-y-2.5 pt-3">
          <div className="h-5 w-2/3 rounded-full bg-ink/10" />
          <div className="h-5 w-3/5 rounded-full bg-ink/10" />
          <div className="h-5 w-1/2 rounded-full bg-ink/10" />
        </div>
        <div className="flex items-end justify-between pt-6">
          <div className="h-9 w-28 rounded-full bg-ink/10" />
          <div className="h-10 w-28 rounded-full bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
