import { User2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ChatHeader() {
  return (
    <Card className='flex items-center justify-between gap-3 rounded-none'>
      <CardContent className='px-x p-2 sm:px-2'>
        <div className='flex items-center gap-3'>
          <div className={`rounded-full bg-purple-300/10 p-3 text-purple-500`}>
            <User2 className={`h-5 w-5 text-purple-500`} />
          </div>
          <p className='text-xl font-light'>edoniyorbekdev</p>
        </div>
      </CardContent>
    </Card>
  )
}
