import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { LoadingBar } from './LoadingBar'

export type LoadingInputProps = ClassNameProps & {
  withLabel?: boolean
}

export function LoadingInput({
  className,
  withLabel = true,
}: LoadingInputProps): ReactElement {
  const { loading } = useTheme()
  return (
    <div className={classNames(loading.input.base, className)}>
      {withLabel && <LoadingBar className={loading.input.upper.base} />}
      <LoadingBar className={loading.input.lower.base} />
    </div>
  )
}
