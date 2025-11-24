import React from 'react'

const Footer = ({ onOpenRules }) => {


  return (
    <div className='flex items-center justify-center lg:absolute md:absolute sm:absolute lg:right-20 md:right-20 sm:right-20 lg:bottom-10 md:bottom-10 sm:bottom-10'>
        <button onClick={onOpenRules} className='text-white text-[1rem] font-semibold cursor-pointer uppercase bg-transparent border-2 px-7 py-1 border-(--Gray-600) rounded-lg'>
            Rules
        </button>
    </div>
  )
}

export default Footer