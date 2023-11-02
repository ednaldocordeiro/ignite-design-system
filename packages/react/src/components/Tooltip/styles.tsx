import { TooltipContent } from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideToTop = keyframes({
  '0%': { opacity: 0, transform: 'translateY(5px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
})

const slideToBottom = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-5px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
})

const slideToRight = keyframes({
  '0%': { opacity: 0, transform: 'translateX(5px)' },
  '100%': { opacity: 1, transform: 'translateX(0px)' },
})

const slideToLeft = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-5px)' },
  '100%': { opacity: 1, transform: 'translateX(0px)' },
})

export const TooltipContentContainer = styled(TooltipContent, {
  background: '$gray900',
  borderRadius: '$md',
  padding: '$3',

  boxShadow: '4px 16px 24px 0px #00025',

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': {
      animation: `${slideToTop} 150ms ease-in`,
    },
    '&[data-side="bottom"]': {
      animation: `${slideToBottom} 150ms ease-out`,
    },
    '&[data-side="right"]': {
      animation: `${slideToRight} 150ms ease-out`,
    },
    '&[data-side="left"]': {
      animation: `${slideToLeft} 150ms ease-out`,
    },
  },
})
