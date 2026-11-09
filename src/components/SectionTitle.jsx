export default function SectionTitle({ tag, title, subtitle, align = 'center', tagClass = 'bg-sun' }) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {tag && (
        <span
          className={`inline-block -rotate-2 rounded-full border-3 border-ink px-4 py-1 text-sm font-black tracking-wide uppercase shadow-sticker-sm ${tagClass}`}
        >
          {tag}
        </span>
      )}
      <h2 className="mt-4 text-3xl leading-tight font-black sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg font-semibold text-ink/70">{subtitle}</p>}
    </div>
  );
}
