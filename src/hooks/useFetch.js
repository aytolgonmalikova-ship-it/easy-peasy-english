import { useCallback, useEffect, useState } from 'react';

/**
 * Runs an async `fetcher` and tracks { data, loading, error }.
 * `reload()` repeats the request (used by the "Try again" button).
 * `fetcher` should be a stable function (e.g. imported from services/api).
 */
export default function useFetch(fetcher) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setState((s) => ({ ...s, loading: true, error: null }));

    fetcher()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((error) => active && setState({ data: null, loading: false, error }));

    return () => {
      active = false;
    };
  }, [fetcher, attempt]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);

  return { ...state, reload };
}
