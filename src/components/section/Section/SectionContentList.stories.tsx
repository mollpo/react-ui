import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContentList as SectionContentListComponent } from './SectionContentList'
import { SectionListItem } from '../SectionItem/SectionItem'

export default {
  title: 'Components/Section/SectionContentList',
  component: SectionContentListComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-div element and applies basic padding.<br> ' +
          'Usually, it is used in combination with other sections components to have a padding for the `children`.',
      },
    },
  },
} as ComponentMeta<typeof SectionContentListComponent>

//What could be a better name for each list item
const Template: ComponentStory<typeof SectionContentListComponent> = (args) => (
  <SectionContentListComponent {...args}>
    <SectionListItem>Element 1</SectionListItem>
    <SectionListItem>Element 2</SectionListItem>
    <SectionListItem>Element 3</SectionListItem>
  </SectionContentListComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const BackgroundColorWhite = Template.bind({})
BackgroundColorWhite.args = {
  backgroundColor: 'white',
}