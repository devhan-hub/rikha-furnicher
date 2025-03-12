'use client'
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Header from "./Header"
import { usePathname } from "next/navigation"
import HomeHeader from "./HomeHeader"
const Navbar = () => {
  const pathname = usePathname()
  const navVariant = {
    initial: {
      y: -50,
      x: "-50%",
      opacity: 0,
    },
    animate: {
      y: 0,
      x: "-50%",
      opacity: 1,
      transform: {
        duration: 1,
      },
      exit: {
        y: -50,
        opacity: 0,
      }
    },
  }
  const [isScrollPast, setScrolllPast] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 450) {
      setScrolllPast(true)
    } else {
      setScrolllPast(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })
  return (
    <AnimatePresence>
      {isScrollPast ? (
        <motion.div
          key="default"
          initial="initial"
          animate="animate"
          exit='exit'
          variants={navVariant}
          className="fixed z-[999] top-14 left-1/2 mx-auto w-[98%] -translate-x-1/2 rounded-sm shadow-md  bg-[#fef9e9] bgopacity-[0.8] backdrop-blur-lg border border-white border-opacity-[.08]"
        >
          <Header/>
        </motion.div>
      ) : (
        <>
          {
           pathname==='/'? <div className='w-full  z-50 '><HomeHeader/></div>:<div className="w-full z-50 shadow-md container "><Header/></div>
          
          }
          </>
      )
      }
    </AnimatePresence>
  )
}

export default Navbar
