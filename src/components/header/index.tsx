import { Header } from '../layout/header'
import { ProfileDropdown } from '../profile-dropdown'
import { ThemeSwitch } from '../theme-switch'

export default function MainHeader() {
  return (
    <Header fixed>
      {/* <MenuList className='hidden h-auto gap-5 border-none px-3 md:flex' /> */}
      <div className='ml-auto flex items-center space-x-4'>
        <ThemeSwitch />
        <ProfileDropdown />
      </div>
    </Header>
  )
}
