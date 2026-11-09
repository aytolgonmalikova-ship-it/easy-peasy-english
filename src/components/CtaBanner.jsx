import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mascot from '../assets/mascot.svg';
import { Star } from './Decorations';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_URL } from '../services/contacts';

export default function CtaBanner({ title, text, button }) {
  const { t } = useTranslation();

  return (
    <section className="container-x py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] border-3 border-ink bg-coral px-6 py-10 text-center shadow-sticker-lg sm:px-12 sm:py-14 md:text-left">
        <div className="dots-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <Star className="absolute top-6 left-6 h-8 w-8 animate-float" />
        <Star className="absolute right-[40%] bottom-6 h-6 w-6 animate-float-slow" color="#7CC8FF" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl [text-shadow:3px_3px_0_#2B2D42]">
              {title || t('cta.title')}
            </h2>
            <p className="mt-3 text-lg font-bold text-white/95 sm:text-xl">{text || t('cta.text')}</p>
            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link to="/contacts" className="btn btn-sun w-full sm:w-auto">
                {button || t('cta.button')}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" /> {t('cta.whatsapp')}
              </a>
            </div>
          </div>
          <img
            src={mascot}
            alt=""
            className="mx-auto hidden w-48 animate-float md:block lg:w-60"
          />
        </div>
      </div>
    </section>
  );
}
