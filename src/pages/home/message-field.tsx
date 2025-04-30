import { useRef } from 'react'
import { Send } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

type Props = {
  onSend: (message: string) => void
}

export default function MessageField({ onSend }: Props) {
  const ref = useRef<HTMLInputElement | null>(null)

  function handleSubmit() {
    if (ref.current?.value) {
      onSend(ref.current?.value ?? '')
      ref.current.value = ""
    }
  }
  return (
    <form
      onSubmit={(v) => {
        v.preventDefault()
        handleSubmit()
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
