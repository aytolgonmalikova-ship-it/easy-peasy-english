// Small inline SVG icon set — no icon library needed.

const base = (props) => ({
  width: 24,
  height: 24,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...base(props)}>
      <path
        d="M16 3.5C9.1 3.5 3.5 9 3.5 15.8c0 2.4.7 4.6 1.9 6.5L3.5 28.5l6.4-1.8a12.6 12.6 0 0 0 6.1 1.6c6.9 0 12.5-5.5 12.5-12.3S22.9 3.5 16 3.5z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M11.6 9.8c.3-.1.7 0 .9.3l1.3 2.4c.2.4.1.8-.2 1.1l-.8.8c.8 1.7 2.1 3 3.8 3.8l.8-.8c.3-.3.7-.4 1.1-.2l2.4 1.3c.3.2.5.6.3.9l-.5 1.4c-.3.8-1.2 1.3-2 1.1-4.3-1-7.6-4.3-8.6-8.6-.2-.8.3-1.7 1.1-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...base(props)}>
      <path
        d="M21.2 4.3 2.9 11.4c-1 .4-1 1.7 0 2l4.5 1.5 1.7 5.4c.2.7 1.1.9 1.6.4l2.5-2.4 4.7 3.4c.6.4 1.4.1 1.6-.6l3.2-15.4c.2-1-.6-1.7-1.5-1.4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m7.6 14.9 9.4-6.6-6.4 7.7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...base(props)}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...base(props)}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...base(props)}>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...base(props)}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" {...base(props)}>
      <path d="M4 6.5h16M4 12h16M4 17.5h10" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" {...base(props)}>
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" {...base(props)}>
      <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" fill="currentColor" />
    </svg>
  );
}

export const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
};
