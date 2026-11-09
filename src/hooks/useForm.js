import { useMemo, useState } from 'react';

/**
 * Minimal form hook.
 * - `validate(values)` returns { field: 'errorKey' } for invalid fields.
 * - Errors are shown only for touched fields (after blur or a submit attempt),
 *   then update live while typing.
 * - Submit is blocked while there are errors.
 */
export default function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const allErrors = useMemo(() => validate(values), [values, validate]);

  const errors = useMemo(
    () => Object.fromEntries(Object.entries(allErrors).filter(([field]) => touched[field])),
    [allErrors, touched],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
    if (Object.keys(allErrors).length > 0 || submitting) return;

    setSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
  };

  return {
    values,
    errors,
    hasVisibleErrors: Object.keys(errors).length > 0,
    submitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
}
