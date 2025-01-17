import { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import {
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form'
import { InputField, InputFieldProps, Status } from '../form'

export type DateFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = Omit<InputFieldProps, 'status' | 'onChange'> & {
  name: TFieldName
}

type HTMLNullableInputElement = Omit<HTMLInputElement, 'value'> & {
  value: HTMLInputElement['value'] | null | undefined
}

/**
 * An [InputField](../?path=/docs/components-form-inputfield--docs) within the context of a `react-hook-form` form and with the default type `date`.
 *
 * The form value that is returned for validation is of type `Date | null`. `null` is returned if the input is an empty string or nullish.
 */
export const DateFormField = forwardRef(function DateFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  { name, message, ...props }: DateFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <Controller
      name={name}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => {
        const inputValue =
          (value as unknown) instanceof Date && !isNaN(value)
            ? formatDateForDateInput(value)
            : ''

        const inputOnChange = (
          event: ChangeEvent<HTMLNullableInputElement>,
        ) => {
          const value = event.target.value

          if (value === '' || value === null || value === undefined) {
            onChange(null as FieldPathValue<TFieldValues, TFieldName>)
          } else {
            const date = new Date(value)
            if (!isNaN(date.getTime())) {
              onChange(date as FieldPathValue<TFieldValues, TFieldName>)
            }
          }
        }

        return (
          <InputField
            {...field}
            {...props}
            type="date"
            value={inputValue}
            onChange={inputOnChange}
            message={error?.message ?? message}
            status={error ? Status.Invalid : undefined}
            ref={ref}
          />
        )
      }}
    />
  )
})

export function formatDateForDateInput(date: Date): string {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}
