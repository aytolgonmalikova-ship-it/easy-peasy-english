import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ErrorCard from '../components/ErrorCard';
import CtaBanner from '../components/CtaBanner';
import { TONE_CLASSES } from '../components/CourseCard';
import useFetch from '../hooks/useFetch';
import usePageTitle from '../hooks/usePageTitle';
import { fetchTeam } from '../services/api';
import mascot from '../assets/mascot.svg';

const STAT_BG = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-coral'];
const STEP_ICONS = ['🎵', '🃏', '🧩', '💬'];

function TeamSkeleton() {
  return (
    <div className="card-sticker animate-pulse p-6 text-center" aria-hidden="true">
      <div className="mx-auto h-24 w-24 rounded-full bg-ink/10" />
      <div className="mx-auto mt-5 h-6 w-1/2 rounded-full bg-ink/10" />
      <div className="mx-auto mt-3 h-4 w-2/3 rounded-full bg-ink/10" />
      <div className="mx-auto mt-5 h-4 w-full rounded-full bg-ink/10" />
      <div className="mx-auto mt-2 h-4 w-4/5 rounded-full bg-ink/10" />
    </div>
  );
}

function Team() {
  const { t } = useTranslation();
  const { data, loading, error, reload } = useFetch(fetchTeam);

  if (error) return <ErrorCard error={error} onRetry={reload} />;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role={loading ? 'status' : undefined}>
      {loading ? (
        <>
          <span className="sr-only">{t('status.loading')}</span>
          {[0, 1, 2].map((i) => <TeamSkeleton key={i} />)}
        </>
      ) : (
        data.map((member, i) => {
          const tone = TONE_CLASSES[member.tone];
          return (
            <article
              key={member.id}
              className={`card-sticker animate-pop p-6 text-center transition hover:-translate-y-1 hover:rotate-0 ${
                i % 2 ? 'rotate-1' : '-rotate-1'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full border-3 border-ink text-5xl shadow-sticker-sm ${tone.solid}`}
                aria-hidden="true"
              >
                {member.emoji}
              </div>
              <h3 className="mt-5 text-2xl font-black">{t(`team.${member.id}.name`)}</h3>
              <p className="mt-1 font-extrabold text-coral">{t(`team.${member.id}.role`)}</p>
              <p className="mt-3 font-semibold text-ink/70">{t(`team.${member.id}.bio`)}</p>
              <span className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-black ${tone.soft}`}>
                {t('aboutPage.experience', { count: member.experience })}
              </span>
            </article>
          );
        })
      )}
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  usePageTitle('meta.about');
  const stats = t('aboutPage.stats', { returnObjects: true });
  const steps = t('aboutPage.steps', { returnObjects: true });

  return (
    <>
      <PageHeader emoji="🌈" tone="mint" title={t('aboutPage.title')} subtitle={t('aboutPage.subtitle')} />

      {/* Mission */}
      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionTitle align="left" tag={t('about.tag')} title={t('aboutPage.missionTitle')} tagClass="bg-sky" />
          <p className="mt-6 text-lg font-semibold text-ink/75">{t('aboutPage.missionText1')}</p>
          <p className="mt-4 text-lg font-semibold text-ink/75">{t('aboutPage.missionText2')}</p>
          <blockquote className="mt-8 rotate-1 rounded-[2rem] border-3 border-ink bg-sun p-6 text-xl font-black shadow-sticker">
            {t('about.value')}
          </blockquote>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-[4%] animate-blob border-3 border-ink bg-coral-soft" aria-hidden="true" />
          <img src={mascot} alt="" className="relative w-full animate-float p-8" />
        </div>
      </section>

      {/* Stats */}
      <section className="container-x">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {Array.isArray(stats) &&
            stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-[2rem] border-3 border-ink p-5 text-center shadow-sticker sm:p-7 ${STAT_BG[i]} ${
                  i % 2 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                <div className="text-4xl font-black sm:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm font-extrabold sm:text-base">{s.label}</div>
              </div>
            ))}
        </div>
      </section>

      {/* Steps */}
      <section className="container-x py-16 sm:py-24">
        <SectionTitle title={t('aboutPage.stepsTitle')} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(steps) &&
            steps.map((step, i) => (
              <li key={step.title} className="card-sticker relative p-6 pt-10">
                <span className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full border-3 border-ink bg-coral text-xl font-black text-white">
                  {i + 1}
                </span>
                <span className="absolute top-4 right-5 text-3xl" aria-hidden="true">
                  {STEP_ICONS[i]}
                </span>
                <h3 className="text-xl font-black">{step.title}</h3>
                <p className="mt-2 font-semibold text-ink/70">{step.text}</p>
              </li>
            ))}
        </ol>
      </section>

      {/* Team (mock API) */}
      <section className="bg-grape-soft py-16 sm:py-24">
        <div className="container-x">
          <SectionTitle title={t('aboutPage.teamTitle')} subtitle={t('aboutPage.teamSubtitle')} />
          <div className="mt-12">
            <Team />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
