'use client'
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Raleway } from 'next/font/google';
import { useState } from "react";
import { ArrowRight, Star, StarIcon, StarOff } from "lucide-react";
import { FaTools, FaGem, FaTruck } from "react-icons/fa"; // 
import Button from "@/components/ui/button2";
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });


export default function Home() {
  const [isClicked, setIsClicked] = useState(1)

  return (
    <>
    {/* hero section  */}
    <section  className="w-[97%] mx-auto  max-h-[88vh]">
      <div className="sm:grid grid-cols-12 space-y-6 sm:space-y-0 grid-row-4 gap-x-12 gap-y-4 p-8 pb-4 bg-[#f6f4f4] rounded-lg justify-between items-center">

        <div className="flex flex-col gap-4  text-left sm:col-span-4 md:col-span-3 items-start">

          <p className={`text-5xl sm:text-3xl lg:text-4xl font-bold ${raleway.className}`}>
          Timeless  <span className="border-[3px]  inline-block  border-[#f3a63a] px-2 text-[#e79018] rounded-lg origin-center transform -rotate-[4deg]">Elegance</span>Unmatched Comfort 
          </p>
          <p className="hidden sm:block"> Beautifully Crafted Furniture That Brings Comfort and Style Home</p>
          <Button text="Shop Now"/>
         
       
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
            <p className={cn("text-md text-[#444] hidden md:block", {"text-white":isClicked==1})} >Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className={cn("cursor-pointer p-4 rounded-xl duration-500", { "text-white bg-[#e79018]": isClicked == 2 })} onClick={() => setIsClicked(2)}>

            <p className={`font-bold ${raleway.className} text-lg md:text-xl`}>BedRoom</p>
            <p className={cn("text-md text-[#444] hidden md:block", {"text-white":isClicked==2})} >Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className={cn("cursor-pointer p-4 rounded-xl duration-500 ", { "text-white bg-[#e79018]": isClicked == 3 })} onClick={() => setIsClicked(3)}>

            <p className={`font-bold ${raleway.className} text-lg md:text-xl`}>Kichen</p>
            <p className={cn("text-md text-[#444] hidden md:block", {"text-white":isClicked==3})} >Lorem ipsum dolor sit amet consectetur.</p>
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


    {/* <section  className="max-w-[1000px] w-[98%] mx-auto flex  gap-4 ">
      <h2>What Sets Us Apar</h2>
    <div className="highlight">
        <FaTools size={50} /> 
        <h3>Premium Craftsmanship</h3>
        <p>Handcrafted with high-quality materials for long-lasting luxury.</p>
      </div>
      <div className="highlight">
        <FaGem size={50} />  */}
        {/* Design Icon */}
        {/* <h3>Exclusive Designs</h3>
        <p>Unique, elegant pieces that redefine interior style.</p>
      </div>
      <div className="highlight">
        <FaTruck size={50} />  */}
        {/* Shipping Icon */}
        {/* <h3>Worldwide Shipping</h3>
        <p>Safe and secure delivery to your doorstep.</p>
      </div>
    </section> */}

    </>
  );
}
