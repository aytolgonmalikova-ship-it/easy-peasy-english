// Cartoon decorative shapes used across sections.

export function Cloud({ className = '' }) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      <path
        d="M24 56h72a18 18 0 0 0 2-35.9A26 26 0 0 0 49.5 12 19 19 0 0 0 24 56z"
        fill="var(--color-surface)"
        stroke="var(--color-ink)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Star({ className = '', color = '#FFE27A' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.5l2.8 6.1 6.7.7-5 4.5 1.4 6.6L12 17l-5.9 3.4 1.4-6.6-5-4.5 6.7-.7z"
        fill={color}
        stroke="var(--color-ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M3 12 Q 28 2 53 12 T 103 12 T 153 12 T 197 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wave({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-8 w-full sm:h-14 ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <path d="M0 40C240 80 480 0 720 40s480 0 720 0v40H0z" fill="currentColor" />
    </svg>
  );
}
