'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Buttons from "@/components/ui/button2";
import { catagory } from "@/lib/mockcatagoryata";
import ProductCard from "@/components/ProductCard";
import { mock, service } from '../lib/mockproductdate'
import Clock from "@/components/ui/Clock";


export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section className="w-[98%] relative sm:px-12 px-8 sm:pt-10  pb-0 sm:pb-6 mx-auto shadow-md rounded-md  bg-[#fef9e9] space-y-4 ">
        <div className=" flex flex-col sm:flex-row space-y-2  sm:space-y-0 max-w-[1000px] mx-auto  gap-x-12 gap-y-4  py-16  rounded-lg justify-between items-center">

          <div className="flex flex-col gap-4  text-left sm:col-span-6 col-span-6  sm:items-start items-center">

            <p className={`text-3xl sm:text-4xl text-center sm:text-start lg:text-5xl font-bold font-cinzel text-shadow-md`}>
              Timeless  <span className="border-[3px]  inline-block  border-[#f3a63a] px-2 text-[#e79018] rounded-lg origin-center transform -rotate-[4deg]">Elegance</span>Unmatched Comfort
            </p>
            <p className="text-center sm:block"> Beautifully Crafted Furniture That Brings Comfort and Style Home</p>
            <Buttons text="Shop Now" />
          </div>

          <div className="  ml-auto  w-full   self-start  ">
            <Image
              className="rounded-2xl  "
              src="/images/hero2.png"
              width={640}
              height={640}
              alt='sofa'
            />
          </div>
        </div>

        <div className="social hidden sm:block  space-x-6  ">

          <div className=" inline-flex flex-wrap flex-col border-r-2 border-gray-800 pr-3">
            <h5 className="font-bold text-xl ">8K+</h5>
            <span className="text-gray-700 text-md">  Happey clients</span>
          </div>
          <div className="inline-flex flex-col ">
            <h5 className="font-bold text-xl ">788+ </h5>
            <span className="text-gray-700 text-sm">Furnicher Equipment</span>
          </div>

        </div>
      </section>

      {/* uniq */}
      <section className="px-12 py-16 mx-auto max-w-[1000px]  ">

        <div className="flex gap-12 items-center justify-center flex-wrap">
          {
            service.map((item, index) => (
              <div className="highlight flex gap-4" key={index}>
                <div className="relative">
                  <span className="absolute -bottom-1 left-6 w-6 h-6 bg-[#e79018] bg-opacity-80 rounded-full -z-10"></span>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg capitalize">{item.title}</h3>
                  <p className="text-sm text-opacity-70 text-black">{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* catgory section */}
      <section className="pt-16 pb-20 bg-[#f4f4f4] space-y-12 w-[98%] mx-auto px-6 rounded-xl">
        <h1 className="text-4xl font-bold  text-center">our shope_<span className="text-[#e79018]">Catagory</span></h1>
        <div className=" grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 justify-center items-center ">
          {
            catagory.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 items-center  py-2  shadow-lg flex-wrap   bg-white rounded-lg">
                <p className="text-2xl font-bold">{item.title}</p>
                <div className="grid grid-cols-2 gap-4  px-4">
                  {
                    item.images.map((image, index) =>
                    (

                      <div key={index}>
                        <img
                          className={`w-full bg-[${image.color}]  p-2 h-28 object-cover rounded-sm`}
                          src={image.src}

                          alt={image.name}
                        />
                        <p className=" text-sm font-medium lowercase text-zinc-700 dark:text-zinc-300">{image.name}</p>
                      </div>
                    ))
                  }
                </div>
                <Button className='my-2'>View Collection</Button>
              </div> )) }
        </div>
      </section>

      {/* featured section */}
      <section className="px-12 py-16 space-y-12">
        <h1 className="text-start text-4xl font-semibold text-blue-950">
          Featured Products
          <span><img src="/Images/.line.svg" alt="" /></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <ProductCard data={mock} />
        </div>
      </section>
      <section className="px-8 py-12 bg-custom-gradient">

        <h2 className="text-black md:text-4xl text-3xl font-bold text-center mb-8">Limited Offer 😲 BIG DISCOUNT <span className="text-red-500">-50%</span></h2>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center md:gap-12  px-4">
          <div className="flex flex-col md:gap-6 gap-8 items-start md:justify-self-end  justify-center">
            <h4 className="text-black md:text-3xl text-2xl">Luxury L shape sofa</h4>
            <Clock />
            <Button className='transform hover:scale-125"'>Shope now</Button>
          </div>
          <div className="relative h-60 w-[60%] hidden sm:block">
            <Image src='/images/clockImage.png' alt="clock_image" layout="fill" objectFit="contain" />
          </div>
        </div>
      </section>

      {/* new collection */}
      <section className="px-12 py-16 space-y-12 ">
        <h1 className="text-start text-5xl font-semibold text-blue-950">
          New collections
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <ProductCard data={mock} />
        </div>
      </section>

      {/* call to action  */}
      <section className="px-12 py-16 bg-custom-gradient flex items-center justify-center">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">Get Exclusive Offers On Your Email</h1>
          <h6>Subscribe to our newsletter and stay updated</h6>
          <form className="flex items-center justify-center">
            <div className="flex overflow-hidden border border-[#e79018] rounded-full">
              <input
                type="text"
                placeholder="Your email"
                className="px-6 py-2 outline-none border-none rounded-s-full focus:ring-1 ring-[#e79018]"
              />
              <Button className="bg-[#e79018] text-white px-4 py-2 rounded-e-full -ml-px" size="lg">
                Subscribe
              </Button>

            </div>
          </form>
        </div>
      </section>




    </>
  );
}
