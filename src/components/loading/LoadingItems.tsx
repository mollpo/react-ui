import { SectionDescriptionItem } from '../section'
import { LoadingBar } from './LoadingBar'

type LoadingFieldProps = {
  /**
   * Defines the tone of the bar. Basically the color, so be sure to have the colors defined in Tailwind.
   * */
  tone?: string
}

const LoadingField: React.FC<LoadingFieldProps> = ({ tone }) => (
  <SectionDescriptionItem
    title={<LoadingBar tone={tone} className="p-2.5 w-40" />}
    content={<LoadingBar tone={tone} className="p-3 w-full" />}
  />
)

const LoadingInput: React.FC<LoadingFieldProps> = ({ tone }) => (
  <div>
    <LoadingBar tone={tone} className="p-2 w-40" />
    <LoadingBar
      tone={tone}
      className="p-6 mt-1 mb-1 w-full border border-transparent"
    />
  </div>
)

export { LoadingField, LoadingInput }