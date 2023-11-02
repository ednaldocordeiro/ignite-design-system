import { Button, Toast, ToastProps, ToastProvider } from '@ed-ignite-ui/react'
import { useArgs } from '@storybook/client-api'
import { Meta } from '@storybook/react'

const formattedDate = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format(new Date())

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: formattedDate,
  },
} as Meta<ToastProps>

export const Primary = (args: ToastProps) => {
  const [{ open }, changeArgs] = useArgs<ToastProps>()

  function handleOpen() {
    changeArgs({ open: !open })
  }

  return (
    <ToastProvider>
      <Button onClick={handleOpen}>Submit</Button>

      <Toast {...args} onOpenChange={handleOpen} />
    </ToastProvider>
  )
}
