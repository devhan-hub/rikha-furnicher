'use client'
import { Button } from "./ui/button"
import Image from "next/legacy/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { addCartItem } from "@/redux/slices/cartSlice"
import { useDispatch , useSelector } from "react-redux"



const ProductCard = ({ data }) => {
const dispatch = useDispatch()

const addToCart =(item)=>{
  const product={
    id:item.id,
    price:item.price,
    productName:item.productName,
    imgUrl:item.imgUrl
  }
  dispatch(addCartItem(product))
}

  return (

    data.map((item, index) => (
      <div className=" flex flex-col gap-8 cursor-pointer p-4" key={index}>
        <motion.div className="w-full h-60 relative   "  whileHover={{scale:0.9}}>
          <Image 
            src={item.imgUrl}
            alt="bed package"
            layout="fill"
            objectFit="contain"
            className="p-3"
          />
        </motion.div>
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-lg text-start font-semibold"><Link href={`/collection/${item.id}`}>{item.productName}</Link></p>
          {/* <p className="text-center text-sm">{item.desc}</p> */}
          <p className="text-lg text-start font-semibold">${item.price}</p>
          <Button   onClick={()=>addToCart(item)}
           className=' font-semibold hover:bg-[#e79018] hover:scale-110 transition-all  duration-300'>
            Add to cart
          </Button>
        </div>
      </div>
    ))
  )
}

export default ProductCard
