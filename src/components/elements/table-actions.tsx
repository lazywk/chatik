import { Row } from '@tanstack/react-table'
import { Pencil, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TableActionsProps<TData> {
  row: Row<TData>
  onDelete?: (data: TData) => void
  onEdit?: (data: TData) => void
}

export function TableActions<TData>({
  row,
  onDelete,
  onEdit,
}: TableActionsProps<TData>) {
  return (
    <div>
      {onDelete && (
        <Button
          className='size-8 p-0 text-destructive hover:bg-destructive/10 hover:text-destructive sm:size-10'
          variant='ghost'
          onClick={() => onDelete?.(row.original)}
        >
          <Trash size={18} />
        </Button>
      )}
      {onEdit && (
        <Button
          className='size-8 p-0 text-primary hover:bg-primary/10 hover:text-primary sm:size-10'
          variant='ghost'
          onClick={() => onEdit?.(row.original)}
        >
          <Pencil size={18} />
        </Button>
      )}
    </div>
  )
}
