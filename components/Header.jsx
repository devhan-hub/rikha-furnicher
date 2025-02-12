'use client'
import { EyeClosedIcon, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Raleway } from 'next/font/google';
import { Search, User , Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const user = true;
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });

const Header = () => {
  const pathname = usePathname();
  return (
    <header className=' sticky w-full  bg-[#FEF8E6] shadow-md z-50 '>
      <div className="flex justify-between items-center h-16  mx-auto max-w-[95%]">

        <div className={`${raleway.className} text-[#e88903] font-bold sm:text-2xl  text-xl order-2 md:order-1`}>
          Rikha-Furnicher
        </div>

        <nav className="hidden items-center justify-between gap-16 md:flex md:order-2 xl:text-lg ">
          <ul className="flex items-center justify-center gap-6 no-underline  flex-1">
            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/' })}>
                Home
              </Link>
            </li>

            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/collection' })}>
                Collection
              </Link>
            </li>
            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/about' })}>
                About
              </Link>
            </li>
            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/contact' })}>
                Contact
              </Link>
            </li>

          </ul>
        </nav>


      {/* mobile nav */}

        <div className="flex items-center gap-4 order-1 md:order-3  md:hidden ">
    
          <div className="flex">
          <Sheet>
            <SheetTrigger><Menu/></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                <div className={`${raleway.className} text-[#e88903] font-bold sm:text-2xl  text-xl order-2 md:order-1`}>
               Rikha-Furnicher
              </div>
                <X/>
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
                <nav className=" ">
          <ul className="flex flex-col items-center justify-center gap-6 no-underline  flex-1">
            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/' })}>
                Home
              </Link>
            </li>

            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/collection' })}>
                Collection
              </Link>
            </li>
            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/about' })}>
                About
              </Link>
            </li>
            <li>
              <Link href='/' className={cn('transition-colors ', { "text-[#e88903]": pathname === '/contact' })}>
                Contact
              </Link>
            </li>

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
{/* end of mobile */}

          <div className="flex items-center gap-4 order-3">
          <Button variant="outline" className='border-[#e79018] border-2 px-2 py-1 self-center md:flex hidden'>
            <Search /> search...
          </Button>
          {/* user */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout <LogOut /></DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className=' text-white hover:bg-[#e79018] hover:scale-110 duration-700'><User size={24} /></Button>
          )}

          <div >
            <span></span>
            <Button variant="ghost" size='icon' ><ShoppingBag size={32} /></Button>
          </div>
        </div>
        </div>

        

    </header >
  )
}

export default Header
