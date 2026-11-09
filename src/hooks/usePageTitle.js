import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function usePageTitle(key) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `${t(key)} — Easy Peasy English`;
  }, [key, t, i18n.language]);
}
