import { User } from '@/types/user'
import { User2 } from 'lucide-react'
import UserCard from '@/components/chat/user-card'

export default function ChatList() {
  const users: User[] = [
    { id: 1, username: 'edoniyorbekdev', avatar: User2 },
    { id: 2, username: 'abrorbek', avatar: User2 },
    { id: 3, username: 'ahmadjohn', avatar: User2 },
  ]

  return (
    <div className='flex flex-col gap-0 min-w-[360px] bg-card'>
      {users?.map((usr) => <UserCard key={usr.id} {...usr} />)}
    </div>
  )
}
