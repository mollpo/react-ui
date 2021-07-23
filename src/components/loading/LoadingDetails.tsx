import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingField } from '.'

export type LoadingDetailsProps = {
  /**
   * Defines the number of items in the section.
   */
  numberOfItems: number
  /**
   * Defines the title of the section.
   */
  sectionHeader: React.ReactNode
  /**
   * Defines the tone of the background. Basically the color, so be sure to have the colors defined in Tailwind.
   */
  toneSectionBackground?: string
  /**
   * Defines the background color of the pulsing elements. Basically the color, so be sure to have the colors defined in Tailwind.
   */
  toneLoadingBar?: string
}

const LoadingDetails: React.FC<LoadingDetailsProps> = ({
  numberOfItems,
  sectionHeader,
  toneSectionBackground,
  toneLoadingBar,
}) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContentTwoColumn backgroundColor={toneSectionBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingField tone={toneLoadingBar} key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

export { LoadingDetails }