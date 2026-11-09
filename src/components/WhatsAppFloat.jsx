import { useTranslation } from 'react-i18next';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_URL } from '../services/contacts';

export default function WhatsAppFloat() {
  const { t } = useTranslation();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsappFloat')}
      title={t('whatsappFloat')}
      className="group fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border-3 border-ink bg-wa text-white shadow-sticker transition hover:-translate-y-1 hover:shadow-sticker-lg sm:right-6 sm:bottom-6 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-wa/50" aria-hidden="true" />
      <WhatsAppIcon className="h-7 w-7 group-hover:animate-wiggle sm:h-8 sm:w-8" />
    </a>
  );
}
