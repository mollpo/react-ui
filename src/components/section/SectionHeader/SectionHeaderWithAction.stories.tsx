import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionHeaderWithAction as SectionHeaderWithActionComponent } from './SectionHeader'
import IconAccessTime from '@aboutbits/react-material-icons/dist/IconAccessTime'

export default {
  title: 'Components/Section/Header With Action',
  component: SectionHeaderWithActionComponent,
} as ComponentMeta<typeof SectionHeaderWithActionComponent>

const Template: ComponentStory<typeof SectionHeaderWithActionComponent> = (
  args
) => (
  <SectionHeaderWithActionComponent
    {...args}
    title={'I am a section header with action!'}
  />
)

export const Default = Template.bind({})
Default.args = {}

export const Action = Template.bind({})
Action.args = {
  actionIcon: <IconAccessTime width="24" height="24" />,
}
