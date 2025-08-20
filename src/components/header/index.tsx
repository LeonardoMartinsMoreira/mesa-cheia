import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '../ui/drawer'
import { List, MagnifyingGlassIcon } from '@phosphor-icons/react'

export default function Header() {
  return (
    <div className="flex bg-white z-20 w-full fixed justify-between items-center pt-4 px-2">
      <Drawer direction="left">
        <DrawerTrigger>
          <List size={24} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader></DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <MagnifyingGlassIcon size={24} />
    </div>
  )
}
