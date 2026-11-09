import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, WhatsAppIcon, SOCIAL_ICONS } from '../components/Icons';
import usePageTitle from '../hooks/usePageTitle';
import { COURSES } from '../services/mockData';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, SOCIALS, WHATSAPP_URL } from '../services/contacts';

function InfoRow({ icon: Icon, label, children, bg }) {
  return (
    <li className="flex items-start gap-4">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-3 border-ink ${bg}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-sm font-extrabold text-ink/55 uppercase">{label}</div>
        <div className="font-black break-words">{children}</div>
      </div>
    </li>
  );
}

export default function Contacts() {
  const { t } = useTranslation();
  usePageTitle('meta.contacts');
  const [params] = useSearchParams();

  const courseId = params.get('course');
  const initialMessage = COURSES.some((c) => c.id === courseId)
    ? t('courses.prefill', { course: t(`courses.items.${courseId}.title`) })
    : '';

  return (
    <>
      <PageHeader emoji="💌" tone="coral" title={t('contacts.title')} subtitle={t('contacts.subtitle')} />

      <section className="container-x grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
        {/* Info */}
        <div className="space-y-8">
          <div className="card-sticker p-6 sm:p-8">
            <h2 className="text-2xl font-black">{t('contacts.infoTitle')}</h2>
            <ul className="mt-6 space-y-5">
              <InfoRow icon={PhoneIcon} label={t('contacts.phone')} bg="bg-sky">
                <a href={PHONE_HREF} className="hover:text-coral">{PHONE_DISPLAY}</a>
              </InfoRow>
              <InfoRow icon={MailIcon} label={t('contacts.email')} bg="bg-sun">
                <a href={`mailto:${EMAIL}`} className="hover:text-coral">{EMAIL}</a>
              </InfoRow>
              <InfoRow icon={PinIcon} label={t('contacts.address')} bg="bg-mint">
                {t('contacts.addressValue')}
              </InfoRow>
              <InfoRow icon={ClockIcon} label={t('contacts.hours')} bg="bg-grape">
                {t('contacts.hoursValue')}
              </InfoRow>
            </ul>

            <div className="mt-7 border-t-3 border-dashed border-ink/15 pt-6">
              <div className="text-sm font-extrabold text-ink/55 uppercase">{t('contacts.followUs')}</div>
              <div className="mt-3 flex gap-3">
                {SOCIALS.map(({ id, label, href }) => {
                  const Icon = SOCIAL_ICONS[id];
                  return (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-ink shadow-sticker-sm transition hover:-translate-y-1 hover:-rotate-6 ${
                        id === 'whatsapp' ? 'bg-wa text-white' : id === 'telegram' ? 'bg-sky' : 'bg-coral text-white'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* WhatsApp card */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex -rotate-1 items-center gap-4 rounded-[2rem] border-3 border-ink bg-wa p-6 text-white shadow-sticker transition hover:rotate-0 hover:shadow-sticker-lg"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-3 border-ink bg-white text-wa group-hover:animate-wiggle">
              <WhatsAppIcon className="h-9 w-9" />
            </span>
            <span className="min-w-0">
              <span className="block text-xl font-black [text-shadow:2px_2px_0_#2B2D42]">{t('contacts.whatsappTitle')}</span>
              <span className="block font-bold text-white/95">{t('contacts.whatsappText')}</span>
              <span className="mt-1 inline-block rounded-full bg-coal px-3 py-1 text-sm font-black text-white">
                {PHONE_DISPLAY} →
              </span>
            </span>
          </a>
        </div>

        {/* Form */}
        <div className="card-sticker relative p-6 sm:p-8">
          <span
            className="absolute -top-5 right-6 rotate-6 rounded-full border-3 border-ink bg-sun px-4 py-1 text-sm font-black shadow-sticker-sm"
            aria-hidden="true"
          >
            ✏️ Hello!
          </span>
          <h2 className="mb-6 text-2xl font-black sm:text-3xl">{t('contacts.form.title')}</h2>
          <ContactForm key={courseId || 'default'} initialMessage={initialMessage} />
        </div>
      </section>
    </>
  );
}
