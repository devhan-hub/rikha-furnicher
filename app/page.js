'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Buttons from "@/components/ui/button2";
import { catagory } from "@/lib/mockcatagoryata";
import ProductCard from "@/components/ProductCard";
import { service } from '../lib/mockproductdate'
import Clock from "@/components/ui/Clock";
import { feature } from "@/lib/product";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section className="bg-heroBack h-max">
        <div className="container  ">
          <div className=" relative py-2">
          <div className="absolute top-14 -right-24 opacity-10 text-[120px] font-bold z-20 text-gray-500 overflow-hidden  flex items-center justify-center">
                  <span className="">FURNITURE</span>
                </div>
          <div className="md:absolute inset-y-0 right-0  w-2/5 bg-secondary overflow-hidden z-0 " />
         <Navbar />
        <main className=" px-4 relative">
          <div className="flex flex-col items-center justify-center md:flex-row ">
            <div className="w-full  md:w-1/2 pt-12 pb-4 px-4 lg:pt-24 flex flex-col  gap-10 md:mt-0 mt-6">
              <h1 className="text-5xl md:text-6xl  font-bold leading-tight">
                <span className="">Timeless</span>
                <span className="block text-[#e79018]">_Elegance</span>
                <span className="block">Unmatched</span>
                <span className="block">Comfort</span>
              </h1>

              <Buttons text="Shop Now" />

              <div className="hidden md:flex mt-6 pt-8 border-t border-gray-300  justify-self-end mb-auto">
                <div className="border-r border-gray-300 pr-12">
                  <h3 className=" text-3xl font-bold">778k+</h3>
                  <p className="text-gray-600 text-sm">
                    Furnicher &<br />Home Equipment
                  </p>
                </div>

                <div className="pl-12">
                  <h3 className="block text-3xl font-bold">8k+</h3>
                  <p className="text-gray-600 text-sm">Happy Clients<br />More of this</p>
                </div>
              </div>
            </div>    
           <div className="w-full md:w-1/2 ">
           <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-secondary md:bg-transparent rounded-lg" >
                  <Image src='/images/hero3.png' fill alt="heor image" className="object-contain" />
                </div>
           </div>
          </div>
        </main>
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
              </div>))}
        </div>
      </section>

      {/* featured section */}
      <section className="px-12 py-16 space-y-12">
        <h1 className="text-start text-4xl font-semibold text-blue-950">
          Featured Products
          <span><img src="/Images/.line.svg" alt="" /></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <ProductCard data={feature} />
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
          <ProductCard data={feature} />
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



