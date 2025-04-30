import { Link, linkOptions } from '@tanstack/react-router'
import {
  LayoutDashboard,
  ArrowUpDown,
  ChartNoAxesCombined,
  Settings,
  GalleryHorizontalEnd,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export const menuItems = [
  linkOptions({
    to: '/',
    label: 'Asosiy',
    icon: <LayoutDashboard className='h-5 w-5' />,
  }),
  linkOptions({
    to: '/transactions',
    icon: <ArrowUpDown className='h-5 w-5' />,
    label: 'Operatsiyalar',
  }),
  linkOptions({
    to: '/categories',
    icon: <GalleryHorizontalEnd className='h-5 w-5' />,
    label: 'Kategoriyalar',
  }),
  linkOptions({
    to: '/reports',
    icon: <ChartNoAxesCombined className='h-5 w-5' />,
    label: 'Hisobot',
  }),
  linkOptions({
    to: '/settings',
    icon: <Settings className='h-5 w-5' />,
    label: 'Sozlamalar',
  }),
]

export default function MenuList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex h-16 items-center justify-between border-t px-2',
        'bg-background text-foreground',
        className
      )}
    >
      {menuItems.map((item) => (
        <Link
          {...item}
          key={item.to}
          activeProps={{
            className: '[&_div]:text-primary [&_div:hover]:!text-primary',
          }}
          className='rounded-lg'
        >
          <div
            className={cn(
              'flex flex-1 flex-col items-center justify-center gap-1 p-1 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex-row'
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
