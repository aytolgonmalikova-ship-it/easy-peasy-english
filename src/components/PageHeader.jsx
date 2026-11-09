import { Cloud, Star } from './Decorations';

const TONES = {
  sky: 'bg-sky-soft',
  sun: 'bg-sun-soft',
  mint: 'bg-mint-soft',
  coral: 'bg-coral-soft',
};

export default function PageHeader({ title, subtitle, emoji, tone = 'sky' }) {
  return (
    <section className={`relative overflow-hidden rounded-b-[3rem] border-b-3 border-ink ${TONES[tone]}`}>
      <div className="dots-bg absolute inset-0" aria-hidden="true" />
      <Cloud className="absolute top-6 -left-8 w-28 animate-float-slow sm:w-36" />
      <Cloud className="absolute right-[-1.5rem] bottom-6 w-24 animate-float sm:w-32" />
      <Star className="absolute top-10 right-[14%] h-8 w-8 animate-float" />
      <Star className="absolute bottom-10 left-[16%] h-6 w-6 animate-float-slow" color="#FF7F6B" />

      <div className="container-x relative py-14 text-center sm:py-20">
        <div className="mx-auto mb-5 flex h-20 w-20 -rotate-6 animate-pop items-center justify-center rounded-3xl border-3 border-ink bg-surface text-4xl shadow-sticker">
          <span aria-hidden="true">{emoji}</span>
        </div>
        <h1 className="text-4xl leading-tight font-black sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink/70 sm:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
