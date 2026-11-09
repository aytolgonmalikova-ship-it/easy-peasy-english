import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { Wave, Star } from './Decorations';
import { NAV_LINKS } from './Header';
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon, SOCIAL_ICONS } from './Icons';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, SOCIALS, WHATSAPP_URL } from '../services/contacts';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-palette relative mt-10 text-cream">
      <Wave className="text-ink" />
      <div className="relative bg-ink">
        <Star className="absolute top-6 right-[8%] h-8 w-8 animate-float-slow" />
        <Star className="absolute bottom-24 left-[4%] h-6 w-6 animate-float" color="#FF7F6B" />

        <div className="container-x grid gap-10 pt-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs font-semibold text-cream/75">{t('footer.tagline')}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-sm mt-5 border-cream shadow-[3px_3px_0_0_#FFE27A]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black text-sun">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2.5 font-bold">
              {NAV_LINKS.map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-cream/80 transition hover:text-sun">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black text-sky">{t('footer.contacts')}</h3>
            <ul className="space-y-3 font-bold text-cream/80">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2.5 transition hover:text-sun">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-sky" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-sun"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-wa" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 break-all transition hover:text-sun">
                  <MailIcon className="h-5 w-5 shrink-0 text-sky" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" /> {t('contacts.addressValue')}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black text-coral">{t('footer.follow')}</h3>
            <div className="flex gap-3">
              {SOCIALS.map(({ id, label, href }) => {
                const Icon = SOCIAL_ICONS[id];
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-cream transition hover:-translate-y-1 hover:-rotate-6 ${
                      id === 'whatsapp' ? 'bg-wa text-white' : id === 'telegram' ? 'bg-sky text-ink' : 'bg-coral text-white'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-cream/15">
          <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-sm font-semibold text-cream/60 sm:flex-row sm:text-left">
            <p>© {year} Easy Peasy English. {t('footer.rights')}</p>
            <p>{t('footer.made')} 💚</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
