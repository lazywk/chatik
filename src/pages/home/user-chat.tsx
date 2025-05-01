import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { TMessage } from '@/types/chat'
import ChatHeader from '@/components/chat/chat-header'
import Message from '@/components/chat/message'
import MessageField from './message-field'

export default function UserChat() {
  const [messages, setMessages] = useState<TMessage[]>([
    {
      text: 'Salom dunyo',
      type: 'send',
    },
    {
      text: 'Yuborilgan xabar',
      type: 'send',
    },
    {
      text: 'Qabul qilingan xabar',
      type: 'recive',
    },
    {
      text: 'Yana yangi xabar yuborildi',
      type: 'send',
    },
  ])
  const navigate = useNavigate()

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate({ to: '/' })
      }
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className='relative flex flex-1 flex-col justify-start gap-2 bg-gradient-to-t from-primary/45 to-purple-300/70 dark:from-primary/10 dark:to-purple-300/25'>
      <ChatHeader />
      <div className='flex max-h-full flex-1 flex-col items-start gap-1 overflow-y-auto p-2'>
        {messages?.map((msg) => <Message key={msg.text} {...msg} />)}
      </div>
      <MessageField
        onSend={(v) =>
          setMessages((c) => [
            ...c,
            {
              text: v,
              type: 'send',
            },
          ])
        }
      />
    </div>
  )
}
