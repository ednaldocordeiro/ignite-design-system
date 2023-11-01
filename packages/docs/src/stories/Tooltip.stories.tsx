import { Button, Tooltip, TooltipProps } from '@ed-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    description: 'A description to Tooltip',
    children: <Button>Submit</Button>,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
