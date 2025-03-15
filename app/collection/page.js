'use client'
import ProductCard from "@/components/ProductCard";
import { products } from '@/lib/product'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [filteredProduct, setFilterdProduct] = useState([])
  const [category, setCategory] = useState([])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  console.log(category, 'categry')

  const handelFilter = () => {
    let productCopy = products.slice()
    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category))
    }
    setFilterdProduct(productCopy)
  }

  useEffect(() => {
    handelFilter();
  }, [category])

  return (
    <>
      <Navbar />

      <div className="flex flex-col sm:flex-row justify-between  gap-1 sm:gap-10  pt-20 border-t px-12">

        <div className="min-w-60 mb-10">
          <p className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
            {!showFilter ? <FaAngleRight onClick={() => setShowFilter(true)} className="sm:hidden block" /> : <FaAngleDown className="sm:hidden block" onClick={() => setShowFilter(false)} />}
          </p>
          <div className={`border  border-gray-300 pl-5 py-3 mt-6 sm:block ${showFilter ? '' : 'hidden'}`}>
            <p className="mb-3 text-sm font-medium ">
              CATEGORIES
            </p>
            <div className="flex  flex-col gap-3 text-sm font-light  text-gray-700">
              <p className="flex gap-1.5">
                <input type="checkbox" value={'livingRoom'} onChange={toggleCategory} />Living Room
              </p>
              <p className="flex gap-1.5">
                <input type="checkbox" value={'dining'} onChange={toggleCategory} />Dining & kitchen
              </p>
              <p className="flex gap-1.5">
                <input type="checkbox" value={'bedroom'} onChange={toggleCategory} />Bedroom
              </p>
              <p className="flex gap-1.5">
                <input type="checkbox" value={'office'} onChange={toggleCategory} />Office and study
              </p>
            </div>

          </div>
        </div>
        <div className="flex-1 mx-auto ">
          <div className="flex justify-between gap-12 mb-12">
            <p className="sm:text-4xl text-2xl  capitalize font-cinzel font-bold">All Collections</p>
            {/* <select className="border-2 border-gray-300 text-[16px] px-4 font-cinzel bg-white">
            <option value="relevant">Sort by: relevant</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 l gap-12">
            {
              <ProductCard data={filteredProduct} />
            }

          </div>

        </div>

      </div>
    </>
  )
}

export default Collection
