import { useMemo, useState } from 'react'
import { TMessage } from '@/types/chat'
import Bg from '@/assets/chat-bg.png'
import { Card } from '@/components/ui/card'
import ChatHeader from '@/components/chat/chat-header'
import Message from '@/components/chat/message'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import ChatList from './chat-list'
import MessageField from './message-field'

export default function HomeMain() {
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

  console.log(messages)

  return (
    <div className='flex h-full items-start'>
      <div className='relative h-full'>
        <ChatList />
        <div className='absolute bottom-2 w-full px-3'>
          <Card className='flex items-center justify-between rounded-3xl px-3 py-2'>
            <ProfileDropdown />
            <ThemeSwitch />
          </Card>
        </div>
      </div>
      <div
        className='flex min-h-full flex-1 flex-col bg-secondary bg-contain sm:bg-[25%]'
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundPosition: 'center',
        }}
      >
        <div className='relative flex flex-1 flex-col justify-start gap-2 bg-gradient-to-t from-primary/45 to-purple-300/70 dark:from-primary/10 dark:to-purple-300/25'>
          <ChatHeader />
          <div className='flex max-h-full flex-1 flex-col items-start gap-1 p-2 overflow-y-auto'>
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
      </div>
    </div>
  )
}
