import { useRef } from 'react'
import { Send } from 'lucide-react'
import useWebSocket from '@/hooks/use-websockets'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

type Props = {
  onSend: (message: string) => void
}

const url =
  'ws://192.168.0.78:8011/chat/ws/message?token=IjZmMGUyMDAzLTljNDItNDkxNS05YjQ2LTJlMWQ3ZmM4ZGU0ZSI.dOubLEcRXrG0UstSAKrobgXe3g0'

export default function MessageField({ onSend }: Props) {
  const ref = useRef<HTMLInputElement | null>(null)

  const { messages, sendMessage } = useWebSocket({
    url,
    onOpen: () => console.log('Ulanish ochildi'),
    onClose: () => console.log('Ulanish yopildi'),
    onError: (error) => console.error('Xato:', error),
  })

  console.log('messages', messages)

  const handleSend = () => {
    const value = ref.current?.value
    if (value?.trim() && value) {
      sendMessage(value, 'User') // Sender sifatida "User" yuborilmoqda
    }

    if (ref.current?.value) {
      onSend(ref.current?.value ?? '')
      ref.current.value = ''
    }
  }

  function handleSubmit() {
    if (ref.current?.value) {
      onSend(ref.current?.value ?? '')
      ref.current.value = ''
    }
  }
  return (
    <form
      onSubmit={(v) => {
        v.preventDefault()
        // handleSubmit()
        handleSend()
      }}
    >
      <Card className='m-2 flex items-center justify-between gap-3 rounded-none px-3 py-2'>
        <Input placeholder='Message..' ref={ref} />
        <div
          className='flex size-10 items-center justify-center text-primary'
          onClick={handleSubmit}
        >
          <Send size={22} />
        </div>
      </Card>
    </form>
  )
}
