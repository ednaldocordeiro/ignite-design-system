import * as RTooltip from '@radix-ui/react-tooltip'
import { Text } from '../Text'
import { TooltipContentContainer } from './styles'

export interface TooltipProps extends RTooltip.TooltipContentProps {
  description: string
}

export function Tooltip({ description, children }: TooltipProps) {
  return (
    <>
      <RTooltip.Root>
        <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
        <RTooltip.Portal>
          <TooltipContentContainer sideOffset={2}>
            <Text size="sm">{description}</Text>
            <RTooltip.TooltipArrow />
          </TooltipContentContainer>
        </RTooltip.Portal>
      </RTooltip.Root>
    </>
  )
}

export const TooltipProvider = RTooltip.Provider
