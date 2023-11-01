import { TooltipContent } from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContentContainer = styled(TooltipContent, {
  background: '$gray900',
  borderRadius: '$md',
  padding: '$3',

  boxShadow: '4px 16px 24px 0px #00025',
})
