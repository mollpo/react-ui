import React, { ReactElement, useMemo, useState } from 'react'
import { useField } from 'formik'
import classnames from 'classnames'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useCustomInputCss } from '../useCustomInputCss'
import { useInternationalization } from '../../../framework'
import { InputLabel } from '../InputLabel'
import { InputError } from '../InputError'
import {
  SelectItemDialogWithSearch,
  Props as DialogProps,
} from './SelectItemDialogWithSearch'

export type SelectItemProps<ItemType extends ReferenceObject, Error> = {
  id: string
  name: string
  label: string
  placeholder: string
  disabled?: boolean
  defaultValue: ItemType
} & Pick<
  DialogProps<ItemType, Error>,
  | 'useGetData'
  | 'dialogTitle'
  | 'dialogLabel'
  | 'noSearchResults'
  | 'renderListItem'
  | 'renderErrorMessage'
  | 'paginationConfig'
>

export type ReferenceObject = {
  id: string | number
  name: string
  label?: string
}

/**
 * Converts tailwindcss classes from placeholder to text.
 *
 * Some tailwind classes (e.g. text-left) are excluded from the transformation as they are not linked to the text color.
 **/
export const replacePlaceholderColorWithTextColor = (css: string): string => {
  if (!css.includes('placeholder')) {
    return css
  }
  return (
    css
      .split(' ')
      //removes tailwindcss text-<color>
      .filter((item) =>
        item.includes('text')
          ? !!item.match(/(text-(left|center|right|justify)|text-opacity-.*)/g)
          : true
      )
      //transforms tailwindcss placeholder to text
      .map((item) =>
        item.includes('placeholder')
          ? item.replace('placeholder', 'text')
          : item
      )
      .join(' ')
  )
}

export function SelectItem<ItemType extends ReferenceObject, Error>({
  disabled = false,
  id,
  name,
  label,
  placeholder,
  defaultValue,
  useGetData,
  dialogTitle,
  dialogLabel,
  noSearchResults,
  renderListItem,
  renderErrorMessage,
  paginationConfig,
}: SelectItemProps<ItemType, Error>): ReactElement {
  const [field, , helpers] = useField<ItemType>(name)
  const [, , helpersId] = useField<ItemType>(name + '.id')
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const customCss = useCustomInputCss(`${field.name}.id`, disabled)
  const internationalization = useInternationalization()
  const customCssInputCss = useMemo(
    () => replacePlaceholderColorWithTextColor(customCss.inputCss),
    [customCss.inputCss]
  )

  return (
    <>
      <div>
        <InputLabel inputId={id} label={label} className={customCss.labelCss} />
        {field.value.id === '' || field.value.id === 0 ? (
          <button
            type="button"
            id={id}
            onClick={() => {
              setShowDialog(true)
            }}
            className={classnames(customCssInputCss, 'flex flex-row text-left')}
          >
            <span className="flex-1">{placeholder}</span>
            <IconKeyboardArrowDown className="w-6 h-6" />
          </button>
        ) : (
          <div
            className={classnames(
              customCss.inputCss,
              'flex flex-row text-left'
            )}
          >
            <button
              type="button"
              id={id}
              onClick={() => setShowDialog(true)}
              className="flex-1 text-left"
            >
              <span>{field.value.name}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                helpers.setTouched(true)
                helpersId.setTouched(true)
                helpers.setValue(defaultValue)
              }}
              className="pl-2"
            >
              <IconClose
                className="w-6 h-6"
                title={internationalization.translate('shared.select.clear')}
              />
            </button>
          </div>
        )}
        <InputError name={field.name + '.id'} className={customCss.errorCss} />
      </div>
      {showDialog && (
        <SelectItemDialogWithSearch
          onDismiss={() => {
            helpersId.setTouched(true)
            setShowDialog(false)
          }}
          isOpen={showDialog}
          onConfirm={(item: ItemType) => {
            helpersId.setTouched(true)
            helpers.setValue(item)
            setShowDialog(false)
          }}
          useGetData={useGetData}
          renderListItem={renderListItem}
          renderErrorMessage={renderErrorMessage}
          dialogTitle={dialogTitle}
          dialogLabel={dialogLabel}
          noSearchResults={noSearchResults}
          paginationConfig={paginationConfig}
        />
      )}
    </>
  )
}