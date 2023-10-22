import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem sunt debitis doloribus, perspiciatis necessitatibus a id, corporis et ipsam error, commodi explicabo aliquam architecto ea laborum? Laboriosam, neque facilis!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
