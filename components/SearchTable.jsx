import { products } from "@/lib/product";
import ProductCard from "./ProductCard";
import { feature } from "@/lib/product";

export default async function SearchTable ({query}){
   
    const searchData =query.trim() ===""?[]:products.filter(item =>
        item.productName.toLowerCase().startsWith(query.toLowerCase())
    )

    return searchData.length === 0 && query ?(
     
         <div className="flex flex-col items-center justify-center gap-24">
         <p className="text-xl   w-max p-8">  Oops, No results to match your search. </p>
         <div className=" flex flex-col gap-16 container ">
           <h1 className="md:text-4xl text-2xl font-cinzel font-light text-center ">Get to know
           Rikha Bestsellers</h1>
           <div className="flex flex-wrap gap-12 items-center  py-12 ">
           <ProductCard data={feature}/>
       </div>
         </div>
      </div>
      
    ):
     (
        <div className="px-12 py-12 space-y-10">
        <h2 className="text-xl">Search result for <span className="font-cinzel font-bold">{query}</span>...</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-center">
        <ProductCard data={searchData}/>
    </div>
    </div>
    )
}