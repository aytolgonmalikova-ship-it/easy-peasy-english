import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import CourseList from '../components/CourseList';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

export default function Services() {
  const { t } = useTranslation();
  usePageTitle('meta.services');

  return (
    <>
      <PageHeader emoji="🎒" tone="sun" title={t('servicesPage.title')} subtitle={t('servicesPage.subtitle')} />

      <section className="container-x py-16 sm:py-20">
        <CourseList className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4" />
      </section>

      <CtaBanner
        title={t('servicesPage.trialTitle')}
        text={t('servicesPage.trialText')}
        button={t('servicesPage.trialCta')}
      />
    </>
  );
}
