'use client'
import { ShoppingBag } from "lucide-react";
import { Search, User, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { openCart } from "@/redux/slices/cartUiSlics";
import { useDispatch, useSelector } from "react-redux";
import { RiArmchairLine } from "react-icons/ri";
import { navData } from "@/lib/navData";
import MobileNav from "./MobileNav";

const user = true;

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const totalQnt = useSelector(state => state.cart.totalQnt)

  const toggleDrawer = () => {
    dispatch(openCart())
  };

  return (
    <div className="flex justify-between items-center py-3 px-4   container ">
      <div className={`font-cinzel text-[#e88903] font-bold md:text-4xl flex items-center gap-1 text-2xl order-2 md:order-1`}>
        <RiArmchairLine className="text-secondary" />
        <p>Rikha</p>
      </div>
      <nav className="hidden items-center justify-between gap-16 md:flex md:order-2 xl:text-lg ">
        <ul className="flex items-center justify-center gap-6 no-underline  flex-1">
          {
            navData.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.path} className={cn('transition-colors text-lg font-cinzel', { "text-[#e88903]": pathname === item.path })}>
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <MobileNav/>
     
      <div className="flex items-center gap-4 order-3">      
        <button onClick={toggleDrawer} className="text-gray-600 hidden md:block"  ><Search /></button>
        {/* user */}
        {user ? (  
              <Link href='/account'> 
              <Avatar className='cursor-pointer text-sm'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </Link>
        ) : (
          <button  className="text-gray-600"  ><Link href='/account'> <User className="" /></Link></button>
        )}

        <div className="relative  flex items-center">
          <span className="absolute -top-1/2 w-5 h-5 flex items-center justify-center bg-black rounded-full -right-1/2  translate-y-1/4 font-bold text-white">{totalQnt}</span>
          <button onClick={toggleDrawer} className="text-gray-600" ><ShoppingBag className="" /></button>
        </div>
      </div>
    </div>

  )
}

export default Header