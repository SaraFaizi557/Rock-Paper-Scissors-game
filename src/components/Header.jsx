import React from 'react'

const Header = ({ score }) => {


  return (
    <div className='flex flex-row lg:py-4 md:py-4 sm:py-4 py-3 lg:px-6 md:px-6 sm:px-6 px-4 border-3 border-(--Gray-600) rounded-xl w-full lg:w-5xl items-center justify-between'>
        <img className='lg:w-fit md:w-fit sm:w-fit w-25' src="src/assets/logo.svg" alt="logo" />
        <div className='flex lg:leading-none md:leading-none sm:leading-none leading-10 lg:w-34 md:w-34 sm:w-34 w-20 flex-col items-center justify-between bg-white lg:px-6 md:px-6 sm:px-6 py-2 lg:py-3.5 md:py-3.5 sm:py-3.5 rounded-lg'>
            <p className='text-sm uppercase text-(--Blue-700) font-semibold tracking-wider'>Score</p>
            <p className='lg:text-6xl md:text-6xl sm:text-6xl text-[2.5rem] text-(--Navy-900) font-bold'>{score}</p>
        </div>
    </div>
  )
}

export default Header