import { Button } from './button'
import { DrawerClose, DrawerFooter } from './drawer'

export default function DrawerSctions() {
  return (
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant='outline'>Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  )
}
