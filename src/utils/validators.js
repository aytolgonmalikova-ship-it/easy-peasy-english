// Returns translation keys (contacts.errors.*), so messages follow the current language.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^\+?[\d\s()-]+$/;
const NAME_RE = /^[\p{L}\s'’-]+$/u;

export function validateContactForm({ name, email, phone, message }) {
  const errors = {};

  const n = name.trim();
  if (!n) errors.name = 'required';
  else if (n.length < 2) errors.name = 'nameShort';
  else if (!NAME_RE.test(n)) errors.name = 'nameInvalid';

  const e = email.trim();
  if (!e) errors.email = 'required';
  else if (!EMAIL_RE.test(e)) errors.email = 'email';

  const p = phone.trim();
  const digits = p.replace(/\D/g, '');
  if (!p) errors.phone = 'required';
  else if (!PHONE_CHARS_RE.test(p) || digits.length < 9 || digits.length > 15) errors.phone = 'phone';

  const m = message.trim();
  if (!m) errors.message = 'required';
  else if (m.length < 10) errors.message = 'messageShort';

  return errors;
}

export const formatPrice = (value) => new Intl.NumberFormat('ru-RU').format(value);
