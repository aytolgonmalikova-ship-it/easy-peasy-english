import { COURSES, TEAM } from './mockData';

/**
 * Fake backend. Every call is async and resolves after a delay,
 * so the UI can show loading skeletons and handle errors like with a real API.
 *
 * Demo error simulation: add `?demoError=courses`, `?demoError=team`,
 * `?demoError=contact` or `?demoError=all` to the URL.
 * Also: submitting the contact form with an email starting with "error@"
 * returns a server error.
 */

export class ApiError extends Error {
  constructor(code) {
    super(code);
    this.name = 'ApiError';
    this.code = code; // 'serverError' | 'networkError' | 'unknown'
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function shouldFail(key) {
  const flag = new URLSearchParams(window.location.search).get('demoError');
  return flag === key || flag === 'all';
}

async function request(key, resolver, ms = 900) {
  await delay(ms);
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    throw new ApiError('networkError');
  }
  if (shouldFail(key)) throw new ApiError('serverError');
  return resolver();
}

export function fetchCourses() {
  return request('courses', () => structuredClone(COURSES));
}

export function fetchTeam() {
  return request('team', () => structuredClone(TEAM), 1100);
}

export function sendContactMessage(payload) {
  return request(
    'contact',
    () => {
      if (payload.email.trim().toLowerCase().startsWith('error@')) {
        throw new ApiError('serverError');
      }
      return { ok: true, id: Date.now() };
    },
    1300,
  );
}
