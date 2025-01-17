import { FieldPath, FieldValues } from 'react-hook-form'
import { FieldSetField, FieldSetFieldProps, Status } from '../form'
import { useFieldError } from '.'

export type FieldSetFormProps<TFieldValues extends FieldValues> = Omit<
  FieldSetFieldProps,
  'status'
> & {
  field: FieldPath<TFieldValues>
}

/**
 * A [FieldSetField](../?path=/docs/components-form-fieldsetfield--default-story) within the context of a `react-hook-form` form.
 *
 * The `FieldSetFormField` label will display an error state depending on the specified form `fields`.
 */
export function FieldSetFormField<
  TFieldValues extends FieldValues = FieldValues,
>({ field, children, message, ...props }: FieldSetFormProps<TFieldValues>) {
  const error = useFieldError(field)

  return (
    <FieldSetField
      {...props}
      message={error?.message ?? message}
      status={error ? Status.Invalid : undefined}
    >
      {children}
    </FieldSetField>
  )
}
