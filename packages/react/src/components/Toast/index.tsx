import * as RToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Close, ToastRoot, Viewport } from './styles'

export interface ToastProps extends RToast.ToastProps {
  title: string
  description: string
}

export function Toast({ title, description, children, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props}>
        <Box css={{ padding: '$3 $5' }}>
          <RToast.Title asChild>
            <Heading>{title}</Heading>
          </RToast.Title>
          <RToast.Description asChild>
            <Text size={'sm'}>{description}</Text>
          </RToast.Description>
          <Close asChild>
            <X size={20} />
          </Close>
        </Box>
      </ToastRoot>
      <Viewport />
    </>
  )
}

export const ToastProvider = RToast.ToastProvider
