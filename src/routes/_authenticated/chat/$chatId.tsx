import { createFileRoute } from '@tanstack/react-router'
import HomeMain from '@/pages/home'

export const Route = createFileRoute('/_authenticated/chat/$chatId')({
  component: HomeMain,
})
