'use client'
import { products } from "@/lib/product"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { service } from '@/lib/mockproductdate'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { motion } from "framer-motion"
import ProductCard from "@/components/ProductCard"
import { feature } from "@/lib/product"

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState('')
  const [tab, setTab] = useState('desc')
  const [name , setName]= useState("")
  const[rating , setRating]= useState(5)
  const[message , setMessage]= useState("");

  useEffect(() => {
    const product = products.find(item => item.id === id)
    return setProductData(product)
  }, [id, products])

const handleReviw=()=>{

}

  return productData ? (

    <div className='px-12 py-16 space-y-16'>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center  md:gap-12 ">

        <div className="mobile_title block md:hidden space-y-4">
          <h1 className="sm:text-3xl text-2xl font-cinzel font-semibold">{productData.productName}</h1>
          <p className="text-xl font-cinzel lowercase"><span className="text-yellow-500 font-bold text-2xl"> 5.0 &#9733; </span>({productData.reviews.length}) reviws</p>

        </div>
        <div className="p-4 border border-gray-400  flex items-center justify-center shadow-md rounded-md">
          <Image width={300} height={300} src={productData.imgUrl} alt={productData.productName} />
        </div>
        <div className="flex flex-col md:gap-6 gap-8 items-start">
          <h1 className="text-3xl font-cinzel font-semibold hidden md:block">{productData.productName}</h1>
          <p className="text-gray-600  text-sm md:text-lg order-2 md:order-none">{productData.shortDesc} </p>
          <p className="text-xl font-cinzel lowercase hidden md:block"><span className="text-yellow-500 font-bold text-2xl"> 5.0 &#9733; </span>({productData.reviews.length}) reviws</p>
          <p className="flex gap-2 md:gap-4 items-center">
            <span className="line-through text-md sm:text-xl text-gray-500">USD $5677</span>
            <span className="text-2xl sm:text-3xl">USD $3232</span>
            <span className="text-red-700 text-md sm:text-xl">-50%</span>
          </p>
          <Button  className='mt-6'>ADD To Cart</Button>

        </div>
        <div className=" md:col-start-2 col-start-auto ">
          <div className=" flex justify-center gap-4 md:gap-6">
            {
              service.map((item, index) => (
                <div className="flex flex-col gap-2 items-center justify-center" key={index}>
                  <div className="relative ">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-sm ">{item.title}</h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-12 mb-8">
          <h2 onClick={() => setTab('desc')} className={`text-lg md:text-xl cursor-pointer  font-cinzel ${tab === 'desc' ? 'font-semibold' : 'font-normal'}`}>Description</h2>
          <h2 onClick={() => setTab('rev')} className={`text-lg md:text-xl cursor-pointer font-cinzel ${tab === 'rev' ? 'font-semibold' : 'font-normal'}`}>Review</h2>
        </div>
        {
          tab === 'desc' ? (
             <div className="">
              <p className="font-serif leading-10 w-[95%] max-w-[80vw] ">{productData.description}</p>

             </div>
          
          ) : (
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
             {
              productData.reviews.map((review , index)=>(
                <Card key={index} className=''>
                <CardHeader>
                  <CardTitle className='flex flex-col gap-1'>
                  <p className="text-xl font-cinzel">John</p>
                  <p className="font-light"><span className="text-yellow-500 font-bold mr-2 "> {review.rating}&#9733;</span>rating</p>
  
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-4 '>
               
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
              ))
             }
            </div>

                <div className="mt-20 mx-auto w-[95%] max-w-[400px] space-y-4">
                <h1 className=" font-cinzel font-semibold">Share Your Experience </h1>

                  <form action="" className="space-y-4" onSubmit={handleReviw} >
                   <div className="flex flex-col gap-2">
                     <label htmlFor="name" className="font-cinzel">Name</label>
                     <input type="text" onChange={(e)=> setName(e.target.value)}  className="outline-none focus:ring-1 ring-gray-500 px-4 py-1 border border-gray-400 rounded-sm"/>
                   </div>

                   <div className="flex gap-6 items-center">
                   <motion.span onClick={()=> setRating(1)} whileTap={{scale:1.2}} className={`text-lg font-bold cursor-pointer font-cinzel ${rating ===1?'text-yellow-600':'text-yellow-400'}`}>1 &#9733;</motion.span>
                  <motion.span onClick={()=> setRating(2)} whileTap={{scale:1.2}} className={`text-lg font-bold cursor-pointer font-cinzel ${rating ===2?'text-yellow-600':'text-yellow-400'}`}>2 &#9733;</motion.span>
                  <motion.span onClick={()=> setRating(3)} whileTap={{scale:1.2}} className={`text-lg font-bold cursor-pointer font-cinzel ${rating ===3?'text-yellow-600':'text-yellow-400'}`}>3 &#9733;</motion.span>
                  <motion.span onClick={()=> setRating(4)} whileTap={{scale:1.2}} className={`text-lg font-bold cursor-pointer font-cinzel ${rating ===4?'text-yellow-600':'text-yellow-400'}`}>4 &#9733;</motion.span>
                  <motion.span onClick={()=> setRating(5)} whileTap={{scale:1.2}} className={`text-lg font-bold cursor-pointer font-cinzel ${rating ===5?'text-yellow-600':'text-yellow-400'}`}>5 &#9733;</motion.span>
                   </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-cinzel">Message</label>
                    <textarea name="" id="message" rows={4} value={message}  onChange={(e)=> setMessage(e.target.value)} className="outline-none focus:ring-1 ring-gray-500 px-4 py-1 border border-gray-400 rounded-sm"/>
                   </div>
                   <Button type='submit' className='bg-zinc-600'>Submit</Button>
                  </form>
                </div>
            </div>
          )
        }
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-cinzel font-semibold">You may also like </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard data={feature}/>

        </div>
      </div>

    </div>
  ) : (
    <div>No Element exist</div>
  )
}

export default ProductDetail
