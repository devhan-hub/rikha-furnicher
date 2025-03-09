'use client'
import Image from "next/legacy/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { addCartItem } from "@/redux/slices/cartSlice"
import { useDispatch  } from "react-redux"
import { FaShoppingCart } from "react-icons/fa";


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
    data.map((item) => (
     <div className="p-2 w-[295px] rounded-tr-3xl bg-[#f5f5f5] shadow-sm border " key={item.id}>
      <div className="flex flex-col size-full justify-center  gap-4">
      <Link href={`/collection/${item.id}`}>
        <motion.div className="w-full h-60 relative   "  whileHover={{scale:0.9}}>
         <Image 
            src={item.imgUrl}
            alt="bed package"
            layout="fill"
            objectFit="contain"
            className="p-3"
          />
         </motion.div>  
         </Link>      
         <div className="flex justify-between items-center bg-white  rounded-md shadow-lg px-4">
          <div className="space-y-1">
          <p className="font-serif text-lg font-bold">Product Name</p>
          <p className=" text-lg font-serif font-extrabold">$700</p>
          </div>
          <motion.button onClick={()=> addToCart(item)} whileTap={{scale:1.2}} className="bg-red-500 p-2 rounded-full text-xl text-white"><FaShoppingCart className=""/></motion.button>
         </div>
      </div>
     </div>
    ))
  )
}

export default ProductCard
