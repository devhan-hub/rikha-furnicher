import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="flex items-center justify-center px-12 pt-20">
    <div className="flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl font-extrabold font-cinzel text-[#f49510]">Rikha</h1>
        <div className="flex space-x-4 text-[#666] ">
          <Link href="https://www.facebook.com" to='/'>
            Home
          </Link>
          <Link href="https://www.instagram.com" to='category'>
            Category
          </Link>
          <Link href="https://www.pinterest.com" to='about'>
            About
          </Link>
          <Link href="https://www.pinterest.com" to='contact'>
           Contact
          </Link>
          <Link href="https://www.pinterest.com" to='#'>
           Login
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800 hover:scale-110 duration-300"  />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700 hover:scale-110 duration-300" />
          </Link>
          <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="text-red-600 text-2xl hover:text-red-800 hover:scale-110 duration-300" />
          </Link>
        </div>
        <div className='text-[#666] p-4 mt-6 pt-4 border-t-2 w-full'>
        <p className='text-center'>Copyright @{year},<span className='font-cinzel font-semibold'>Rikha</span> - All rights reserved.</p>
          
        </div>
    </div>
  </footer>
  )
}

export default Footer
