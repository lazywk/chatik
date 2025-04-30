import { cn } from '@/lib/utils'

type Props = {
  type: 'send' | 'recive'
  text: string
}

export default function Message({ text, type }: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-secondary p-2 px-5 transition-all duration-200',
        type === 'send'
          ? 'ml-auto rounded-br-none'
          : 'mr-auto rounded-bl-none bg-card'
      )}
    >
      <p>{text}</p>
    </div>
  )
}
