import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';
import CourseList from './CourseList';
import { Wave } from './Decorations';
import { ArrowIcon } from './Icons';

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <Wave className="text-sky-soft" />
      <div className="bg-sky-soft py-14 sm:py-20">
        <div className="container-x">
          <SectionTitle
            tag={t('courses.tag')}
            title={t('courses.title')}
            subtitle={t('courses.subtitle')}
            tagClass="bg-coral text-white"
          />
          <div className="mt-14">
            <CourseList limit={3} />
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-sun">
              {t('courses.viewAll')} <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Wave className="text-sky-soft" flip />
    </section>
  );
}
