'use client'
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Header from "./Header"
const Navbar = () => {
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
          className="fixed z-[999] top-16 left-1/2 mx-auto w-[98%] -translate-x-1/2 rounded-full  bg-[#fef9e9] bgopacity-[0.8] backdrop-blur-lg border border-white border-opacity-[.08]"
        >
          <Header/>
        </motion.div>
      ) : (
        <div className='  w-full   shadow-md z-50 bg-white '>
          <Header/>
        </div>
      )
      }
    </AnimatePresence>
  )
}

export default Navbar
