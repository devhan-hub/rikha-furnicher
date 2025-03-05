import React from 'react'

const SideNav = () => {
  return (
    <div className='space-y-6 py-12 px-6'>
    <p className='font-cinzel font-semibold text-2xl' >FILTERS</p>
    <div className="shadow-inner ml-4 rounded-sm border  px-4 py-6 flex flex-col items-start gap-3">
        <p className='font-cinzel font-semibold text-xl ' >Categories</p>
        <div className='flex gap-3'>
            <input type="checkbox" value='all' />
            <p className='text-gray-600 capitalize'>All </p>
        </div>
        <div className='flex gap-3'>
            <input type="checkbox" value='living' />
            <p className='text-gray-600 capitalize' >Living Room</p>
        </div>
        <div className='flex gap-3'>
            <input type="checkbox" value={'dining'} />
            <p className='text-gray-600 capitalize'>Dining & kitchen</p>
        </div>
        <div className='flex gap-3'>
            <input type="checkbox" value={'bedroom'} />
            <p className='text-gray-600 capitalize'>Bedroom</p>
        </div>
        <div className='flex gap-3'>
            <input type="checkbox" value={'office'} />
            <p className='text-gray-600 capitalize'>Office and study</p>
        </div>
    </div>
</div>
  )
}

export default SideNav
