import { bgColors } from "@/app/utils/color"
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">

        <div className="flex gap-2 flex-col justify-center items-center text-4xl">
  <span className={`${bgColors.primary} w-8 h-[3px]`}></span>
  <span className={`${bgColors.primary} w-8 h-[3px]`}></span>
  <span className={`${bgColors.primary} w-8 h-[3px]`}></span>

</div>


        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
           {" Make changes to your profile here. Click save when you're done."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           
           
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
           
           
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
