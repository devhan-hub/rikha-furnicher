'use client'
import ProductCard from "@/components/ProductCard";
import { products } from '@/lib/product'
import SideNav from "./SideNav";
const Collection = () => {

    return (
      <div className="flex  flex-col sm:flex-row md:overflow-hidden mx-auto  py-6">
      <div className="w-full flex-none md:w-64">
          <SideNav />
      </div>
      <div className="space-y-6 ">
         <p className='font-cinzel font-semibold text-2xl sm:text-4xl' >All Category</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12">
          <ProductCard data={products} />
        </div>
      </div>
      </div>
    )
  }
  
  export default Collection
  