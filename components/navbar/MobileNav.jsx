import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from "../ui/button";
  import { Search, User, Menu } from "lucide-react";
  import Link from "next/link";
  import { navData } from "@/lib/navData";
  import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const MobileNav = () => {
      const pathname = usePathname();
    
  return (
<>
      <div className="flex  items-center gap-4 order-1 md:order-3  md:hidden  ">

        <div className="flex">
          <Sheet className='z-[999]'>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent className='z-[9999]'>
              <SheetHeader>
                <SheetTitle>
                  <div className={`font-cinzel text-[#e88903] font-bold text-4xl text-center mt-6 mb-12 mx-auto  order-2 md:order-1`}>
                    Rikha
                  </div>
                </SheetTitle>

                <nav className="">
                  <ul className="flex flex-col items-center justify-center gap-6 no-underline  flex-1">
                    {
                      navData.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link href={item.path} className={cn('transition-colors ', { "text-[#e88903]": pathname === item.path })}>
                              {item.name}
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
        <Button variant="ghost" className=''>
          <Search />
        </Button>
      </div>
      </>
  )
}

export default MobileNav
