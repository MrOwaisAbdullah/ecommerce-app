import React from 'react'
import Headings from '../ui/Headings'
import PagginationArrows from '../ui/PagginationArrows'
import {poppins} from '../../app/fonts'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { IoWatchOutline } from 'react-icons/io5'
import { PiCamera } from 'react-icons/pi'
import { LuGamepad, LuHeadphones } from 'react-icons/lu'
import { TfiMobile } from 'react-icons/tfi'

const Category = () => {
  return (
    <section className={`${poppins.className} xl:container xl:px-20 px-5 mt-12 pt-12 relative overflow-hidden`}>
    <div className='flex mb-8 justify-between '>
    <Headings subheading="Categories" heading="Browse By Category" />
    <PagginationArrows />
    </div>
    <div className='flex flex-wrap m-auto justify-center p-5 gap-4'>
            <div className='group flex flex-col justify-center text-center w-full md:w-[170px] border rounded hover:bg-secondary py-8 px-10 items-center'>
            <TfiMobile className='text-5xl group-hover:text-white justify-center' />
            <h3 className='text-center mt-3 group-hover:text-white'>Phones</h3>
            </div>
            <div className='group flex flex-col justify-center text-center w-full md:w-[170px] border rounded hover:bg-secondary py-8 px-10 items-center'>
            <HiOutlineComputerDesktop className='text-5xl group-hover:text-white' />
            <h3 className='text-center mt-3 group-hover:text-white'>Computer</h3>
            </div>
            <div className='group flex flex-col justify-center text-center w-full md:w-[170px] border rounded hover:bg-secondary py-8 px-10 items-center'>
            <IoWatchOutline className='text-5xl group-hover:text-white' />
            <h3 className='text-center mt-3 group-hover:text-white'>SmartWatch</h3>
            </div>
            <div className='group flex flex-col justify-center text-center w-full md:w-[170px] border rounded hover:bg-secondary py-8 px-10 items-center'>
            <PiCamera className='text-5xl group-hover:text-white' />
            <h3 className='text-center mt-3 group-hover:text-white'>Camera</h3>
            </div>
            <div className='group flex flex-col justify-center text-center w-full md:w-[170px] border rounded hover:bg-secondary py-8 px-10 items-center'>
            <LuHeadphones className='text-5xl group-hover:text-white' />
            <h3 className='text-center mt-3 group-hover:text-white'>Headphones</h3>
            </div>
            <div className='group flex flex-col justify-center text-center w-full md:w-[170px] border rounded hover:bg-secondary py-8 px-10 items-center'>
            <LuGamepad  className='text-5xl place-self-center group-hover:text-white' />
            <h3 className='mt-3 group-hover:text-white'>Gaming</h3>
            </div>
        </div>
    </section>
  )
}

export default Category