'use client'
import Image from "next/image";
import { MdSupportAgent } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { RiGiftLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Raleway } from 'next/font/google';
import { useState } from "react";
import Buttons from "@/components/ui/button2";

import { catagory } from "@/lib/mockcatagoryata";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });


export default function Home() {
  const [isClicked, setIsClicked] = useState(1)

  
  return (
    <>
      {/* hero section  */}
      <section className="w-[97%] mx-auto  max-h-[88vh]">
        <div className="sm:grid grid-cols-12 space-y-6 sm:space-y-0 grid-row-4 gap-x-12 gap-y-4 p-8 pb-4 bg-[#fef9e9] rounded-lg justify-between items-center">

          <div className="flex flex-col gap-4  text-left sm:col-span-4 md:col-span-3 items-start">

            <p className={`text-5xl sm:text-3xl lg:text-4xl font-bold ${raleway.className} text-shadow-md`}>
              Timeless  <span className="border-[3px]  inline-block  border-[#f3a63a] px-2 text-[#e79018] rounded-lg origin-center transform -rotate-[4deg]">Elegance</span>Unmatched Comfort
            </p>
            <p className="hidden sm:block"> Beautifully Crafted Furniture That Brings Comfort and Style Home</p>
            <Buttons text="Shop Now" />
          </div>


          <div className="row-span-3 px-8 py-8 w-[90%] ml-auto col-span-10  sm:col-span-8  md:col-span-6 bg-gradient-to-l from-[#edad53]">
            <Image
              className="rounded-2xl  "
              src="/images/sofa1.jpg"
              width={200}
              height={100}
              alt='sofa'
              layout="responsive"
            />
          </div>

          <div className="md:row-span-3 md:col-span-3 col-span-12 ml-auto row-span-1 w-[90%] sm:col-span-4 sm:-ml-28  md:ml-0 order-4 md:order-3 flex md:flex-col  md:gap-4">
            <div className={cn("cursor-pointer p-4 rounded-xl  duration-500", { "text-white bg-[#e79018]": isClicked == 1 })} onClick={() => setIsClicked(1)}>
              <p className={`font-bold ${raleway.className} text-lg md:text-xl`}>Sofa</p>
              <p className={cn("text-md text-[#444] hidden md:block", { "text-white": isClicked == 1 })} >Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className={cn("cursor-pointer p-4 rounded-xl duration-500", { "text-white bg-[#e79018]": isClicked == 2 })} onClick={() => setIsClicked(2)}>

              <p className={`font-bold ${raleway.className} text-lg md:text-xl`}>BedRoom</p>
              <p className={cn("text-md text-[#444] hidden md:block", { "text-white": isClicked == 2 })} >Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className={cn("cursor-pointer p-4 rounded-xl duration-500 ", { "text-white bg-[#e79018]": isClicked == 3 })} onClick={() => setIsClicked(3)}>

              <p className={`font-bold ${raleway.className} text-lg md:text-xl`}>Kichen</p>
              <p className={cn("text-md text-[#444] hidden md:block", { "text-white": isClicked == 3 })} >Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="social hidden sm:block col-span-8 md:col-span-12 row-span-1 space-x-6 order-3  ">

            <div className=" inline-flex flex-wrap flex-col border-r-2 border-gray-800 pr-3">
              <h5 className="font-bold text-xl ">8K+</h5>
              <span className="text-gray-700 text-md">  Happey clients</span>
            </div>
            <div className="inline-flex flex-col ">
              <h5 className="font-bold text-xl ">788+ </h5>
              <span className="text-gray-700 text-sm">Furnicher Equipment</span>
            </div>

          </div>
        </div>
      </section>


      <section className="my-16 mx-auto w-[98%] max-w-[1000px]  ">

        <div className="flex gap-12 items-center justify-between flex-wrap">
          <div className="highlight flex gap-4 relative ">
            <div className="relative">
              <span className="absolute -bottom-1 left-6 w-7 h-7 bg-[#e79018] bg-opacity-80 rounded-full -z-10"></span>
              <LuTruck size={50} className="z-50" />

            </div>
            <div>
              <h3 className="font-bold text-lg capitalize">Free Shipping </h3>
              <p className="text-sm text-opacity-70 text-black">Free shipping for order above $200</p>
            </div>
          </div>

          <div className="highlight flex gap-4 ">
            <div className="relative ">
              <span className="absolute -bottom-1 left-6 w-6 h-6 bg-[#e79018] bg-opacity-80 rounded-full -z-10"></span>
              <RiGiftLine size={50} className="z-50" />
            </div>

            <div>
              <h3 className="font-bold text-lg capitalize">10 day return </h3>
              <p className="text-sm text-opacity-70 text-black">10 day return money back</p>
            </div>
          </div>


          <div className="highlight flex gap-4">
            <div className="relative">
              <span className="absolute -bottom-1 left-6 w-6 h-6 bg-[#e79018] bg-opacity-80 rounded-full -z-10"></span>
              <MdSupportAgent size={50} className="z-50" />

            </div>
            <div>
              <h3 className="font-bold text-lg capitalize">24/7 support</h3>
              <p className="text-sm text-opacity-70 text-black">we support online all days</p>
            </div>
          </div>

        </div>
      </section>

      {/* catgory section */}
      <section className="pt-16 pb-20 bg-[#f4f4f4] space-y-12 w-[98%] mx-auto px-6 rounded-xl">
        <h1 className="text-4xl font-bold  text-center">our shope_<span className="text-[#e79018]">Catagory</span></h1>
      <div className="desktop grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center ">
        {
          catagory.map((item, index) => (
            <div className="flex flex-col gap-6 items-center  py-2  shadow-lg flex-wrap   bg-white rounded-lg">
              <p className="text-2xl font-bold">{item.title}</p>
              <div className="grid grid-cols-2 gap-4 px-4">
                {
                  item.images.map((image , index)=>(
                    <div key={index}>
                    <img
                    className={`w-full bg-[${image.color}] p-2 h-28 object-cover rounded-sm`}
                    src={image.src}
                   
                    alt={image.name}
                    />
                    <p className=" text-sm font-medium lowercase text-zinc-700 dark:text-zinc-300">{image.name}</p>
                    </div>
                  ))
                }
              </div>
              <Button className='my-2'>View Collection</Button>
            </div>
          ))
        }
      </div>

      </section>

    </>
  );
}
