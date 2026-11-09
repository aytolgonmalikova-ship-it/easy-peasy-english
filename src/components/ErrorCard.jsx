import { useTranslation } from 'react-i18next';

/** Friendly error card. `error.code` maps to status.* translations. */
export default function ErrorCard({ error, onRetry, compact = false }) {
  const { t } = useTranslation();
  const code = error?.code && ['serverError', 'networkError'].includes(error.code) ? error.code : 'unknown';

  return (
    <div
      role="alert"
      className={`card-sticker animate-pop mx-auto flex max-w-xl flex-col items-center bg-coral-soft text-center ${
        compact ? 'p-5' : 'p-8 sm:p-10'
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-full border-3 border-ink bg-surface shadow-sticker-sm ${
          compact ? 'h-14 w-14 text-3xl' : 'h-20 w-20 text-5xl'
        }`}
        aria-hidden="true"
      >
        🌧️
      </div>
      <h3 className={`mt-4 font-black ${compact ? 'text-lg' : 'text-2xl'}`}>{t('status.errorTitle')}</h3>
      <p className="mt-2 font-semibold text-ink/75">{t(`status.${code}`)}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className="btn btn-sun btn-sm mt-5">
          ↻ {t('status.retry')}
        </button>
      )}
    </div>
  );
}
