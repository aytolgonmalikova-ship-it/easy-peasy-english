import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useForm from '../hooks/useForm';
import { validateContactForm } from '../utils/validators';
import { sendContactMessage } from '../services/api';
import mascot from '../assets/mascot.svg';

function Field({ id, label, error, children }) {
  const { t } = useTranslation();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-extrabold">
        {label} <span className="text-berry" aria-hidden="true">*</span>
        <span className="sr-only">({t('contacts.form.required')})</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex animate-pop items-start gap-1.5 text-sm font-bold text-berry">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ initialMessage = '' }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [submitError, setSubmitError] = useState(null);

  const { values, errors, hasVisibleErrors, submitting, handleChange, handleBlur, handleSubmit, reset } = useForm({
    initialValues: { name: '', email: '', phone: '', message: initialMessage },
    validate: validateContactForm,
    onSubmit: async (data) => {
      setSubmitError(null);
      try {
        await sendContactMessage(data);
        setStatus('success');
        reset();
      } catch (err) {
        setSubmitError(err);
        setStatus('error');
      }
    },
  });

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `input ${errors[name] ? 'input-error' : ''}`,
  });

  const errorText = (name) => (errors[name] ? t(`contacts.errors.${errors[name]}`) : null);

  if (status === 'success') {
    return (
      <div className="flex animate-pop flex-col items-center py-8 text-center" role="status">
        <img src={mascot} alt="" className="w-36 animate-float" />
        <h3 className="mt-4 text-3xl font-black">{t('contacts.form.successTitle')}</h3>
        <p className="mt-2 max-w-sm text-lg font-semibold text-ink/70">{t('contacts.form.successText')}</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-sun mt-6">
          {t('contacts.form.again')}
        </button>
      </div>
    );
  }

  const errorCode = ['serverError', 'networkError'].includes(submitError?.code) ? submitError.code : 'unknown';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label={t('contacts.form.name')} error={errorText('name')}>
          <input type="text" autoComplete="name" placeholder={t('contacts.form.namePh')} {...inputProps('name')} />
        </Field>
        <Field id="contact-phone" label={t('contacts.form.phone')} error={errorText('phone')}>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder={t('contacts.form.phonePh')} {...inputProps('phone')} />
        </Field>
      </div>

      <Field id="contact-email" label={t('contacts.form.email')} error={errorText('email')}>
        <input type="email" autoComplete="email" inputMode="email" placeholder={t('contacts.form.emailPh')} {...inputProps('email')} />
      </Field>

      <Field id="contact-message" label={t('contacts.form.message')} error={errorText('message')}>
        <textarea rows={5} placeholder={t('contacts.form.messagePh')} {...inputProps('message')} style={{ resize: 'vertical' }} />
      </Field>

      {status === 'error' && (
        <div role="alert" className="flex animate-pop items-start gap-3 rounded-2xl border-3 border-ink bg-coral-soft p-4">
          <span className="text-2xl" aria-hidden="true">🌧️</span>
          <div>
            <p className="font-black">{t('status.sendFailed')}</p>
            <p className="text-sm font-semibold text-ink/75">{t(`status.${errorCode}`)}</p>
          </div>
        </div>
      )}

      {hasVisibleErrors && (
        <p className="text-sm font-bold text-berry" aria-live="polite">
          {t('contacts.form.fixErrors')}
        </p>
      )}

      <button type="submit" disabled={hasVisibleErrors || submitting} className="btn btn-coral w-full text-lg sm:w-auto">
        {submitting ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-3 border-white border-t-transparent" aria-hidden="true" />
            {t('contacts.form.sending')}
          </>
        ) : (
          <>
            {t('contacts.form.submit')} <span aria-hidden="true">🚀</span>
          </>
        )}
      </button>
    </form>
  );
}
