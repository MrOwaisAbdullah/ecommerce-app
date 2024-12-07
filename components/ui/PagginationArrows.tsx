import React from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

const PagginationArrows = () => {
  return (
    <div className='flex gap-2 items-end mr-10'>
        <IoArrowBack className='bg-graybg rounded-full text-4xl p-2'/>
        <IoArrowForward className='bg-graybg rounded-full text-4xl p-2'/>
    </div>
  )
}

export default PagginationArrows