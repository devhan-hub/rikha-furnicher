import {Suspense} from 'react'
import Search from '@/components/Search';
import Navbar from '../../components/navbar/Navbar';
import SearchTable from '@/components/SearchTable';

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || '';
 
  return (
    <div className=''>
      <Navbar />
      <div className="border-t border-b bg-gray-50 text-center z-50 ">
        <Search />
      </div>
      <Suspense key={query} fallback={<div>Loading....</div>}>
      <SearchTable query={query}/>
      </Suspense>
    </div>
  )
}

