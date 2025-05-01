import { MessageCircleMore } from 'lucide-react'

export default function Logo() {
  return (
    <div className='flex items-end gap-1'>
      <div className='text-primary'>
        <MessageCircleMore />
      </div>
      <span>Chatik</span>
    </div>
  )
}
