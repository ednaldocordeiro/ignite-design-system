import {
  Portal,
  Root,
  TooltipArrow,
  TooltipProvider,
  Trigger,
} from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { TooltipContentContainer } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipContentContainer> {
  description: string
}

export function Tooltip({ description, children }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContentContainer side="top" sideOffset={2}>
            <Text size="sm">{description}</Text>
            <TooltipArrow />
          </TooltipContentContainer>
        </Portal>
      </Root>
    </TooltipProvider>
  )
}
