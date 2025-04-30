import { User } from '@/types/user'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '../ui/card'

export default function UserCard(user: User) {
  const Avatar = user.avatar
  return (
    <Card
      className={cn(
        'cursor-pointer overflow-hidden rounded-none border-0 border-b border-r border-b-secondary border-r-secondary shadow-none transition-all duration-300',
        user.id === 2 && 'bg-secondary'
      )}
    >
      <CardContent className='px-x p-2 sm:px-2'>
        <div className='flex items-center gap-3'>
          <div className={`rounded-full bg-purple-300/10 p-3 text-purple-500`}>
            <Avatar className={`h-5 w-5 text-purple-500`} />
          </div>
          <p className='text-xl font-light'>{user.username}</p>
        </div>
      </CardContent>
    </Card>
  )
}
