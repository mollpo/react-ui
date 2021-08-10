import { MenuLink } from '@reach/menu-button'
import classNames from 'classnames'
import '@reach/menu-button/styles.css'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

type LanguagePickerProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   * */
  onClick: () => void
  /**
   * Defines the accessibility label for the menu.
   * */
  key: string
}

const MenuItem: React.FC<LanguagePickerProps> = ({
  children,
  className,
  ...props
}) => {
  const { menu } = useTheme()

  return (
    <MenuLink className={classNames(menu.menuLink.base, className)} {...props}>
      {children}
    </MenuLink>
  )
}

export { MenuItem }
