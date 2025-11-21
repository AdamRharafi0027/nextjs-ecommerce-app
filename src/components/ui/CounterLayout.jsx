import React from 'react'

const CounterLayout = ({children}) => {
  return (
    <div className='relative'>
        {children}
        <span className='bg-[#646b5d] absolute w-4 h-4 top-0 -right-1 rounded-full centred text-white text-[8px]'>+9</span>
    </div>
  )
}

export default CounterLayout