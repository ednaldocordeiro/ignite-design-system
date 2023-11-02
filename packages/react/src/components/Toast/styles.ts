import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: 'translateX(0)' },
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
})

export const Close = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
  cursor: 'pointer',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  zIndex: 9999,
})
