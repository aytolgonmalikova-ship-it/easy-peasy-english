import { useTranslation } from 'react-i18next';
import useFetch from '../hooks/useFetch';
import { fetchCourses } from '../services/api';
import CourseCard, { CourseCardSkeleton } from './CourseCard';
import ErrorCard from './ErrorCard';

/** Loads courses from the mock API and renders loading / error / data states. */
export default function CourseList({ limit, className = 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3' }) {
  const { t } = useTranslation();
  const { data, loading, error, reload } = useFetch(fetchCourses);

  if (error) return <ErrorCard error={error} onRetry={reload} />;

  if (loading) {
    return (
      <div className={className} role="status" aria-live="polite">
        <span className="sr-only">{t('status.loading')}</span>
        {Array.from({ length: limit || 4 }, (_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const courses = limit ? data.slice(0, limit) : data;

  return (
    <div className={className}>
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </div>
  );
}
