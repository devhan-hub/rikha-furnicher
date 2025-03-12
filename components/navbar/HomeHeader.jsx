'use client'
import { ShoppingBag } from "lucide-react";
import { Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { openCart } from "@/redux/slices/cartUiSlics";
import { useDispatch, useSelector } from "react-redux";
import { RiArmchairLine } from "react-icons/ri";
import { navData } from "@/lib/navData";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const user = false;


const HomeHeader = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const totalQnt = useSelector(state => state.cart.totalQnt)

  const toggleDrawer = () => {
    dispatch(openCart())
  };

  return (
    <div className="flex  items-center lg:gap-12 md:gap-6 py-3 px-6  gap-4  ">
      <div className={`font-cinzel text-[#e88903] font-bold sm:text-4xl md:text-3xl lg:text-4xl flex items-center gap-1 text-3xl order-2 md:order-1 `}>
        <RiArmchairLine className="text-secondary" />
        <p>Rikha</p>
      </div>
      <nav className="hidden items-center justify-between lg:gap-16  md:flex md:order-2 xl:text-lg mr-auto  ">
        <ul className="flex items-center justify-center gap-6 no-underline  flex-1">
          {
            navData.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.path} className={cn('transition-colors  text-secondary font-cinzel', { "text-[#e88903]": pathname === item.path })}>
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
  {/* Mobile responsive */}
      <MobileNav/>

      <div className="flex items-center gap-4 order-3 ml-auto sm:mr-0">
      <motion.button whileTap={{scale:0.9}}  className="relative bg-heroBack text-secondary p-1.5 rounded-full hidden  md:block"  ><Link href='/search'><Search /></Link></motion.button>

        {/* user */}
        {user ? (  
              <Link href='/account'> 
              <Avatar className='cursor-pointer text-sm'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </Link>
        ) : (
            <motion.button whileTap={{scale:0.9}}  className="relative sm:bg-heroBack text-secondary p-1.5 rounded-full sm:shadow-md  "  ><Link href='/account'> <User className="" /></Link></motion.button>
        )}

        <div className="relative  flex items-center ">
          <span className="absolute -top-1/2  flex items-center justify-center w-5 h-5 bg-primary rounded-full -right-3  translate-y-1/2 z-20 font-bold text-white">{totalQnt}</span>
          <motion.button onClick={toggleDrawer} whileTap={{scale:0.9}}  className="relative sm:bg-heroBack text-secondary p-1.5 rounded-full sm:shadow-md  "><ShoppingBag className="" /></motion.button>
        </div>
        <div className="bg-red-600">

        </div>

      </div>
    </div>

  )
}

export default HomeHeader