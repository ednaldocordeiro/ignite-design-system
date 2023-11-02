import {
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@ed-ignite-ui/react'
import { Meta } from '@storybook/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    description: 'A description to Tooltip',
    children: <Button>Submit</Button>,
  },
} as Meta<TooltipProps>

export const Primary = (args: TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip {...args} />
    </TooltipProvider>
  )
}
