import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { RiShieldCheckLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { poppins } from '@/app/fonts'

const Features = () => {
  return (
    <section className={`${poppins.className} relative container grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto place-content-center m-24`}>
    <div className='flex flex-col justify-center items-center text-center'>
        <div className='rounded-full flex border-8 justify-center items-center border-gray-300 h-[70px] w-[70px] bg-black text-white'>
            <TbTruckDelivery className='flex justify-center items-center text-3xl' />
        </div>
        <h3 className='text-xl font-semibold mt-4'>FREE AND FAST DELIVERY</h3>
        <p className='text-sm mt-2'>Free delivery for all orders over $140</p>
    </div>

    <div className='flex flex-col justify-center items-center text-center'>
        <div className='rounded-full flex border-8 justify-center items-center border-gray-300 h-[70px] w-[70px] bg-black text-white'>
        <TfiHeadphoneAlt className='flex justify-center items-center text-3xl ' />
        </div>
        <h3 className='text-xl font-semibold mt-4'>24/7 CUSTOMER SERVICE</h3>
        <p className='text-sm mt-2'>Friendly 24/7 customer support</p>
    </div>

    <div className='flex flex-col justify-center items-center text-center'>
        <div className='rounded-full flex border-8 justify-center items-center border-gray-300 h-[70px] w-[70px] bg-black text-white'>
            <RiShieldCheckLine className='flex justify-center items-center text-3xl ' />
        </div>
        <h3 className='text-xl font-semibold mt-4'>MONEY BACK GUARANTEE</h3>
        <p className='text-sm mt-2'>We reurn money within 30 days</p>
    </div>
    <span className='absolute right-5 lg:right-20 -bottom-14 bg-graybg p-3 rounded-full text-gray-800'><FaArrowUp className="" /></span>
    </section>
  )
}

export default Features