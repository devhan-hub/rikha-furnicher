import React ,{useEffect, useState} from 'react'

const Clock = () => {
  const [days , setDays]= useState()
  const [hours , setHours]= useState();
  const [minutes , setMinutes]= useState();
  const[seconds , setSeconds]= useState();
  let interval;
  const countDown=()=>{
    const destination = new Date("march 4, 2025 00:00:00").getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime()
      const different = destination - now;

      const dayss = Math.floor(different /(1000*60*60*24))
      const hourss = Math.floor(different%(1000*60*60*24)/(1000*60*60))
      const minutess = Math.floor(different%(1000*60*60)/(1000*60))
      const secondss = Math.floor(different%(1000*60)/(1000))

      if(different <0) clearInterval(interval.current)
    else {
     setDays(dayss)
     setHours(hourss)
     setMinutes(minutess)
     setSeconds(secondss)
}

    } , 1000)
  }

  useEffect(()=> countDown() , [])

  return (
    <div className='  text-lg flex items-center gap-3'>
      <div className="clock_data flex items-center gap-3">
        <div>
            <h1 className="text-xl mb-2">{days}</h1>
            <h5 className='md:text-2xl text-xl '>Days</h5>
        </div>
        <span className='text-2xl'>:</span>
      </div>
      <div className="clock_data flex items-center gap-3">
        <div>
            <h1 className="text-xl mb-2">{hours}</h1>
            <h5 className='md:text-2xl text-xl'>Hours</h5>
        </div>
        <span className='text-xl'>:</span>
      </div>
      <div className="clock_data flex items-center gap-3">
        <div>
            <h1 className="text-xl mb-2">{minutes}</h1>
            <h5 className='md:text-2xl text-xl'>Minut</h5>
        </div>
        <span className='text-xl'>:</span>
      </div>
      <div className="clock_data flex items-center gap-3">
        <div>
            <h1 className="text-xl mb-2">{seconds}</h1>
            <h5 className='md:text-2xl text-xl'>Second</h5>
        </div>
      </div>
    </div>
  )
}

export default Clock
