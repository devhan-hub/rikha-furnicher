'use client'

import { SearchIcon } from "lucide-react"
import { useSearchParams , useRouter , usePathname } from "next/navigation"
import {useDebouncedCallback } from 'use-debounce'
 
 const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();


  const handleSearch =useDebouncedCallback((term) => {
     const params = new URLSearchParams(searchParams)
    
     if(term){
      params.set('query' , term)
     }
     else {
      params.delete('query')
     }
     console.log(term)
     replace(`${pathname}?${params.toString()}`)
  },300);

   return (
     <div className="inline-flex items-center justify-center px-6 py-3 my-5 mx-3 w-1/3 sm:w-1/2 border border-gray-300 rounded-full">
      <input
      defaultValue={searchParams.get('query')?.toString()}
       onChange={(e)=>{
        handleSearch(e.target.value)
       }}
       className="flex-1 outline-none bg-inherit" type="text" placeholder="search.." />
      <SearchIcon className="text-gray-500"/>
    </div>
   )
 }
 
 export default Search
 