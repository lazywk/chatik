import { Command } from 'lucide-react'
import { Branch, NavGroup, Profile } from '../types'

export const branches: Branch[] = [
  {
    id: 1,
    name: 'Chilonzor',
    logo: Command,
    plan: "Najot Ta'lim",
  },
  {
    id: 2,
    name: 'Sergeli',
    logo: Command,
    plan: "Najot Ta'lim",
  },
  {
    id: 3,
    name: 'Yunusobod',
    logo: Command,
    plan: "Najot Ta'lim",
  },
]

export const menuItems: NavGroup[] = []

export const profile: Profile = {
  name: 'Doniyor Eshmamatov',
  role: 'reception',
  avatar: '/avatars/shadcn.jpg',
}
