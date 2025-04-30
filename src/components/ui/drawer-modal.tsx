import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useModal } from '@/hooks/use-modal'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

type Props = {
  modalKey?: string
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
  onClose?: () => void
}

const DrawerModal = ({
  title,
  description,
  children,
  modalKey = 'default',
  className = '',
  onClose,
}: Props) => {
  const { isOpen, closeModal } = useModal(modalKey)

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    closeModal()
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleClose}>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className={cn('py-4 pb-0', className)}>{children}</div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerModal
