import { HTMLAttributes, useState } from 'react'
import { IconBrandGoogle } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, _setIsLoading] = useState(false)

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className='grid gap-2'>
        <div className='flex items-center gap-2'>
          <Button
            variant='secondary'
            className='w-full'
            size='lg'
            disabled={isLoading}
          >
            <IconBrandGoogle /> Google
          </Button>
        </div>
      </div>
    </div>
  )
}
