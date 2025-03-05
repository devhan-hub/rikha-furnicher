import ProductCard from "@/components/ProductCard";
import { products } from '@/lib/product'
const Collection = () => {

    return (
      <div className="space-y-6 ">
         <p className='font-cinzel font-semibold text-2xl sm:text-4xl' >All Category</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12">
          <ProductCard data={products} />
        </div>
      </div>
    )
  }
  
  export default Collection
  