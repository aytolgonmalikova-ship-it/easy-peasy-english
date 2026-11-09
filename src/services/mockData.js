// Mock "database". Texts (titles, descriptions) live in src/locales/*.json
// and are looked up by `id`, so content switches language instantly.

export const COURSES = [
  { id: 'starter', emoji: '🧸', tone: 'sun', age: '4–6', lessonsPerWeek: 2, duration: 45, price: 3500, popular: false },
  { id: 'grammar', emoji: '🧩', tone: 'sky', age: '7–10', lessonsPerWeek: 3, duration: 60, price: 4200, popular: true },
  { id: 'speaking', emoji: '🎤', tone: 'coral', age: '8–12', lessonsPerWeek: 2, duration: 60, price: 3900, popular: false },
  { id: 'readers', emoji: '📚', tone: 'mint', age: '6–9', lessonsPerWeek: 2, duration: 50, price: 3600, popular: false },
];

export const TEAM = [
  { id: 'aigerim', emoji: '👩‍🏫', tone: 'sky', experience: 10 },
  { id: 'daniel', emoji: '🧑‍🎤', tone: 'coral', experience: 7 },
  { id: 'elena', emoji: '👩‍🎨', tone: 'mint', experience: 5 },
];
