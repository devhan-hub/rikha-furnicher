
import { Button } from "./ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
const ProductCard = ({ data }) => {
  return (

    data.map((item, index) => (
      <div className=" flex flex-col gap-8 cursor-pointer p-4" key={index}>
        <motion.div className="w-full h-60 relative "  whileHover={{scale:0.9}}>
          <Image 
            src={item.path}
            alt="bed package"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </motion.div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-lg font-semibold">{item.title}</p>
          <p className="text-center text-sm">{item.desc}</p>
          <p className="text-lg font-semibold">${item.price}</p>
          <Button  className=' font-semibold hover:bg-[#e79018] hover:scale-110 transition-all duration-300  duration-300'>
            Add to cart
          </Button>
        </div>
      </div>
    ))
  )
}

export default ProductCard
