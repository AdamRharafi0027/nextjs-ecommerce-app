import React from 'react'

const ButtonLayout = ({children, className}) => {
  return (
    <button className={`bg-[#646B5D] text-white rounded-sm p-2 cursor-pointer hover:bg-[#9b9b9b] ${className}`}>{children}</button>
  )
}

export default ButtonLayout