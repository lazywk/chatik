import { createFileRoute } from '@tanstack/react-router'
import HomeMain from '@/pages/home'

export const Route = createFileRoute('/_authenticated/')({
  component: HomeMain,
})
