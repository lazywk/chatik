import { useLocation } from '@tanstack/react-router'
import Bg from '@/assets/chat-bg.png'
import { Card } from '@/components/ui/card'
import MainHeader from '@/components/header'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import ChatList from './chat-list'
import UserChat from './user-chat'

export default function HomeMain() {
  const { pathname } = useLocation()
  return (
    <div className='flex h-full items-start'>
      <div className='relative h-full'>
        <MainHeader />
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
        {pathname?.includes('/chat/') && <UserChat />}
      </div>
    </div>
  )
}
